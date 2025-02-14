<template>
	<form @submit.prevent="onSubmit">
		<v-input v-model="identifier" autofocus autocomplete="username" :placeholder="t('identifier')" />
		<v-input v-model="password" type="password" autocomplete="current-password" :placeholder="t('password')" />

		<transition-expand>
			<v-input v-if="requiresTFA" v-model="otp" type="text" :placeholder="t('otp')" autofocus />
		</transition-expand>

		<v-notice v-if="error" type="warning">
			{{ errorFormatted }}
		</v-notice>
		<v-button type="submit" :loading="loggingIn" large>{{ t('sign_in') }}</v-button>
	</form>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent, ref, computed, watch, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/auth';
import { RequestError } from '@/api';
import { translateAPIError } from '@/lang';
import { useUserStore } from '@/stores';

type Credentials = {
	identifier: string;
	password: string;
	otp?: string;
};

export default defineComponent({
	props: {
		provider: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const { t } = useI18n();

		const router = useRouter();

		const { provider } = toRefs(props);
		const loggingIn = ref(false);
		const identifier = ref<string | null>(null);
		const password = ref<string | null>(null);
		const error = ref<RequestError | string | null>(null);
		const otp = ref<string | null>(null);
		const requiresTFA = ref(false);
		const userStore = useUserStore();

		watch(identifier, () => {
			if (requiresTFA.value === true) requiresTFA.value = false;
		});

		watch(provider, () => {
			identifier.value = null;
			password.value = null;
			error.value = null;
			otp.value = null;
			requiresTFA.value = false;
		});

		const errorFormatted = computed(() => {
			if (error.value === 'INVALID_PAYLOAD') {
				return translateAPIError('INVALID_CREDENTIALS');
			}

			if (error.value) {
				return translateAPIError(error.value);
			}
			return null;
		});

		return {
			t,
			errorFormatted,
			error,
			identifier,
			password,
			onSubmit,
			loggingIn,
			translateAPIError,
			otp,
			requiresTFA,
		};

		async function onSubmit() {
			if (identifier.value === null || password.value === null) return;

			try {
				loggingIn.value = true;

				const credentials: Credentials = {
					identifier: identifier.value,
					password: password.value,
				};

				if (otp.value) {
					credentials.otp = otp.value;
				}

				await login(credentials, provider.value);

				// Stores are hydrated after login
				const lastPage = userStore.currentUser?.last_page;
				router.push(lastPage || '/content');
			} catch (err: any) {
				if (err.response?.data?.errors?.[0]?.extensions?.code === 'INVALID_OTP' && requiresTFA.value === false) {
					requiresTFA.value = true;
				} else {
					error.value = err.response?.data?.errors?.[0]?.extensions?.code || err;
				}
			} finally {
				loggingIn.value = false;
			}
		}
	},
});
</script>

<style lang="scss" scoped>
.v-input,
.v-notice {
	margin-bottom: 20px;
}
</style>

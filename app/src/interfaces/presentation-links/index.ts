import { defineInterface } from '@directus/shared/utils';
import InterfacePresentationLinks from './presentation-links.vue';
import { ExtensionsOptionsContext } from '@directus/shared/types';

export default defineInterface({
	id: 'presentation-links',
	name: '$t:interfaces.presentation-links.presentation-links',
	description: '$t:interfaces.presentation-links.description',
	icon: 'smart_button',
	component: InterfacePresentationLinks,
	hideLabel: true,
	hideLoader: true,
	types: ['alias'],
	localTypes: ['presentation'],
	group: 'presentation',
	options: ({ collection }: ExtensionsOptionsContext) => [
		{
			field: 'links',
			name: '$t:interfaces.presentation-links.links',
			type: 'json',
			meta: {
				interface: 'list',
				options: {
					fields: [
						{
							field: 'label',
							type: 'string',
							name: '$t:label',
							meta: {
								width: 'full',
								interface: 'input',
								options: {
									placeholder: '$t:label',
								},
							},
						},
						{
							field: 'icon',
							name: '$t:icon',
							type: 'string',
							meta: {
								width: 'half',
								interface: 'select-icon',
							},
						},
						{
							field: 'type',
							name: '$t:type',
							type: 'string',
							meta: {
								width: 'half',
								interface: 'select-dropdown',
								default_value: 'normal',
								options: {
									choices: [
										{ text: '$t:primary', value: 'primary' },
										{ text: '$t:normal', value: 'normal' },
										{ text: '$t:info', value: 'info' },
										{ text: '$t:success', value: 'success' },
										{ text: '$t:warning', value: 'warning' },
										{ text: '$t:danger', value: 'danger' },
									],
								},
							},
							schema: {
								default_value: 'normal',
							},
						},
						{
							field: 'url',
							type: 'string',
							name: '$t:url',
							meta: {
								width: 'full',
								interface: 'system-display-template',
								options: {
									collectionName: collection,
									font: 'monospace',
									placeholder: 'https://example.com/articles/{{ id }}/{{ slug }}',
								},
							},
						},
					],
				},
			},
		},
	],
});

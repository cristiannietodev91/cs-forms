import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { textAlignVariant, textSizes, textVariants } from "./Text.types";

import styles from "./Text.module.css";

const meta: Meta<typeof Text> = {
	title: "CS Design System / Text",
	component: Text,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "inline-radio",
			options: textVariants,
		},
		size: {
			control: "select",
			options: textSizes,
		},
		textAlign: {
			control: "inline-radio",
			options: textAlignVariant,
		},
	},
	parameters: {
		backgrounds: { disable: true },
		componentSubtitle: "Component that represents a paragraph with different variants",
	}
};

export default meta;
type Story = StoryObj<typeof Text>;

const mapSizesText = {
	xxs: "XX Small",
	xs: "X Small",
	sm: "Small",
	md: "Medium",
	lg: "Large",
	xlg: "X Large",
	xxlg: "XX Large",
};

export const Sizes: Story = {
	render: () => <>
		{textSizes.map((size) => (
			<Text key={size} size={size}>{mapSizesText[size]}</Text>
		))}
	</>
};

export const TextVariants: Story = {
	render: () => <>
		{textVariants.map((variant) => (
			<Text variant={variant} key={variant}>{variant}</Text>
		))}
	</>
};

export const Inline: Story = {
	render: () => <>
		{textVariants.map((variant) => (
			<Text variant={variant} key={variant} inline>{variant}&nbsp;</Text>
		))}
	</>
};

export const TextAlign: Story = {
	render: () => <>
		{textAlignVariant.map((textAlign) => (
			<>
				<Text size="xlg">{textAlign}</Text>
				<Text textAlign={textAlign} key={textAlign}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fugiat nostrum
                    eos nam doloremque sunt quibusdam. Tempora aspernatur sunt reprehenderit numquam magnam,
                    asperiores vero hic vel iusto sint laudantium fugit, quia autem,
                    fugiat dolor ducimus eos consequatur soluta assumenda voluptate quo? Reprehenderit,
                    et excepturi? Beatae id qui laboriosam vel magnam sapiente, in unde quis laborum, reprehenderit,
                    minus rerum incidunt quos.
					<br />
                    Quaerat rem voluptate perspiciatis dolorum unde similique tempora temporibus incidunt?
				</Text>
				<br />
			</>
		))}
	</>
};

export const Interactive: Story = {
	args: {
		variant: "primary",
		size: "sm",
		inline: false,
	},
	render: (args) => (
		<Text {...args}>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Assumenda odit, illo vel 
            aliquam, voluptates sequi dolorum recusandae veniam molestias amet possimus ipsum officiis. At sit necessitatibus beatae libero nisi incidunt.
		</Text>
	)
};

export const Custom: Story = {
	args: {
		variant: "primary",
		size: "sm",
		inline: false,
	},
	render: (args) => (
		<Text {...args} className={styles.customText}>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Assumenda odit, illo vel 
            aliquam, voluptates sequi dolorum recusandae veniam molestias amet possimus ipsum officiis. At sit necessitatibus beatae libero nisi incidunt.
		</Text>
	)
};
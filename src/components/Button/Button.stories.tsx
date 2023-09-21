import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { buttonVariants, buttonSizes } from "./Button.types";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";


const meta: Meta<typeof Button> = {
	title: "CS Design System / Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "inline-radio",
			options: buttonVariants,
		},
		onClick: { action: "clicked" }
	},
	parameters: {
		backgrounds: { disable: true },
		componentSubtitle: "Interactive button activated by a user through click, voice, keyboard or other assistive technology",
		a11y: {
			config: {
				rules: [
					{
						// @fixme Color contrast of plain variant must be fixed
						id: "color-contrast",
						selector: "*:not([id^=plain], [id$=outline], h3, h4)"
					}
				]
			}
		}
	}
};

const mapSizesText = {
	sm: "Small",
	md: "Medium",
	lg: "Large"
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AllButtons: Story = {
	render: () => <>
		{buttonVariants.filter((variant)=> variant !== "plain").map((variant)=> (
			<>
				<h3 style={{ color: "darkgrey"}}>{`${variant}`}</h3>
				<br />
				{buttonSizes.map((size) => (
					<Button key={`${variant}-${size}`} id={`${variant}-${size}`} variant={variant} size={size}>{mapSizesText[size]}</Button>
				))}
				<br />
				<br />
				<h4 style={{ color: "darkgrey"}}>{`${variant} - outlined`}</h4>
				<br />
				{buttonSizes.map((size) => (
					<Button key={`${variant}-${size}`} id={`${variant}-${size}-outline`} variant={variant} size={size} outline>{mapSizesText[size]}</Button>
				))}
				<br />
				<br />
			</>
		))}
		<h3 style={{ color: "darkgrey"}}>plain</h3>
		<br />
		{buttonSizes.map((size) => (
			<Button key={`plain-${size}`} id={`plain-${size}-outline`} variant="plain" size={size} outline>{mapSizesText[size]}</Button>
		))}
	</>,
};

export const AllLinks: Story = {
	args: {
		href: "#test-link",
		target: "_self"
	},
	render: (args) => <>
		{buttonVariants.map((variant)=> (
			<>
				{buttonSizes.map((size) => (
					<Button {...args} key={`${variant}-${size}`} id={`${variant}-${size}`} variant={variant} size={size}>{mapSizesText[size]}</Button>
				))}
				<br />
				{buttonSizes.map((size) => (
					<Button {...args} key={`${variant}-${size}-outline`} id={`${variant}-${size}-outline`} variant={variant} size={size} outline>{mapSizesText[size]}</Button>
				))}
				<br />
			</>
		))}
	</>,
};

export const AllSizes: Story = {
	render: () => <>
		{buttonSizes.map((size) => (
			<>
				<Button key={`${size}`} size={size} id={size}>{mapSizesText[size]}</Button>
				<br/>
				<br/>
			</>
		))}
		
	</>,
};

export const Disabled: Story = {
	render: (args) => <>
		{buttonVariants.map((variant) => (
			<>
				<Button key={`${variant}-btn`} id={`${variant}-btn`} size={args.size} variant={variant}  disabled>{variant}</Button>
				<Button key={`${variant}-btn-outline`} id={`${variant}-btn-outline`} size={args.size} variant={variant}  outline disabled>{variant}</Button>
				<br/>
				<br/>
				<Button key={`${variant}-link`} id={`${variant}-link`} size={args.size} variant={variant} href="#test-link" target="_self" disabled>{`Link ${variant}`}</Button>
				<Button key={`${variant}-lnk-outline`} id={`${variant}-lnk-outline`} size={args.size} variant={variant} href="#test-link" target="_self" outline disabled>{`Link ${variant}`}</Button>
				<br/>
				<br/>
			</>
		))}
		
	</>,
};

export const WithIcon: Story = {
	render: (args) => <Button {...args} aria-label="Icon with button" id="button-with-icon"><i className="fa fa-cloud"></i></Button>
};

export const TextWithIcon: Story = {
	render: (args) => <>
		<Button {...args} id="button-right-icon">Label <i className="fa fa-bars"></i></Button>
		<br />
		<Button {...args} id="button-left-icon"><i className="fa fa-bars"></i> Label</Button>
	</>
};

export const ButtonLink: Story = {
	args: {
		href: "#test-link",
		target: "_self"
	},
	render: (args) => <Button {...args} href="#test">Link</Button>
};

export const LinkInteractive: Story = {
	args: {
		href: "#test-link",
		target: "_self",
		children: "Link"
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole("link"));
		await expect(canvas.getByRole("link")).toHaveAttribute(   
			"href",
			"#test-link",
		);
	}
};




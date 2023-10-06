export const textVariants = [
	"primary",
	"secondary",
	"disabled",
] as const;

export const textSizes = [
	"xs",
	"sm",
	"md",
	"lg",
	"xlg",
	"xxlg",
	"xxxlg",
] as const;

export const textAlignVariant = [
	"center",
	"justify",
	"left",
	"right",
] as const;

export type TextSize = (typeof textSizes)[number];
export type TextVariant = (typeof textVariants)[number];
export type TextAlign = (typeof textAlignVariant)[number];


export interface TextProps {
	/**
	 * Property that represents the paragraph in different styles
	 * @default primary
	 */
    variant?: TextVariant;
	/**
	 * Paragraph can be represented in the next sizes
	 */
    size?: TextSize;
	/**
	 * Class name applied to the component to create 
	 * a custom paragraph
	 */
    className?: string;
	/**
	 * The text will be aligned according to this option
	 * when the text is not inline  
	 */
    textAlign?: TextAlign;
	/**
   	* Element to render within the component can be a text or an icon
   	*/
    children: React.ReactNode;
	/**
	 * When is true it sets the display:inline option to the paragraph
	 * @default false
	 */
    inline?: boolean;
}
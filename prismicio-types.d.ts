// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomePageDocumentDataSlicesSlice =
  | FullWidthCtaSlice
  | SplitImageTextSlice
  | CtaBlockSlice
  | HeroSlice;

/**
 * Content for Home page documents
 */
interface HomePageDocumentData {
  /**
   * Slice Zone field in *Home page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice> /**
   * Meta Title field in *Home page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomePageDocumentData>,
    "home_page",
    Lang
  >;

export type AllDocumentTypes = HomePageDocument;

/**
 * Item in *CtaBlock → Default → Primary → CTA*
 */
export interface CtaBlockSliceDefaultPrimaryCtaItem {
  /**
   * CTA Title field in *CtaBlock → Default → Primary → CTA*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.default.primary.cta[].cta_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_title: prismic.KeyTextField;

  /**
   * CTA Text field in *CtaBlock → Default → Primary → CTA*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.default.primary.cta[].cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cta_text: prismic.RichTextField;

  /**
   * CTA Link field in *CtaBlock → Default → Primary → CTA*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.default.primary.cta[].cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * CTA Link Text field in *CtaBlock → Default → Primary → CTA*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.default.primary.cta[].cta_link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_link_text: prismic.KeyTextField;
}

/**
 * Item in *CtaBlock → Testimonial With Pretitle → Primary → CTA*
 */
export interface CtaBlockSliceTestimonialWithPretitlePrimaryCtaItem {
  /**
   * CTA Title field in *CtaBlock → Testimonial With Pretitle → Primary → CTA*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.testimonialWithPretitle.primary.cta[].cta_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_title: prismic.KeyTextField;

  /**
   * CTA Text field in *CtaBlock → Testimonial With Pretitle → Primary → CTA*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.testimonialWithPretitle.primary.cta[].cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cta_text: prismic.RichTextField;

  /**
   * CTA Link field in *CtaBlock → Testimonial With Pretitle → Primary → CTA*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.testimonialWithPretitle.primary.cta[].cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * CTA Link Text field in *CtaBlock → Testimonial With Pretitle → Primary → CTA*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.testimonialWithPretitle.primary.cta[].cta_link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_link_text: prismic.KeyTextField;
}

/**
 * Primary content in *CtaBlock → Default → Primary*
 */
export interface CtaBlockSliceDefaultPrimary {
  /**
   * Title field in *CtaBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *CtaBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * CTA field in *CtaBlock → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.default.primary.cta[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cta: prismic.GroupField<Simplify<CtaBlockSliceDefaultPrimaryCtaItem>>;
}

/**
 * Default variation for CtaBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CtaBlockSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *CtaBlock → Testimonial With Pretitle → Primary*
 */
export interface CtaBlockSliceTestimonialWithPretitlePrimary {
  /**
   * Pretitle field in *CtaBlock → Testimonial With Pretitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.testimonialWithPretitle.primary.pretitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pretitle: prismic.KeyTextField;

  /**
   * Title field in *CtaBlock → Testimonial With Pretitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.testimonialWithPretitle.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *CtaBlock → Testimonial With Pretitle → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.testimonialWithPretitle.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * CTA field in *CtaBlock → Testimonial With Pretitle → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_block.testimonialWithPretitle.primary.cta[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cta: prismic.GroupField<
    Simplify<CtaBlockSliceTestimonialWithPretitlePrimaryCtaItem>
  >;
}

/**
 * Testimonial With Pretitle variation for CtaBlock Slice
 *
 * - **API ID**: `testimonialWithPretitle`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaBlockSliceTestimonialWithPretitle = prismic.SharedSliceVariation<
  "testimonialWithPretitle",
  Simplify<CtaBlockSliceTestimonialWithPretitlePrimary>,
  never
>;

/**
 * Slice variation for *CtaBlock*
 */
type CtaBlockSliceVariation =
  | CtaBlockSliceDefault
  | CtaBlockSliceTestimonialWithPretitle;

/**
 * CtaBlock Shared Slice
 *
 * - **API ID**: `cta_block`
 * - **Description**: CtaBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaBlockSlice = prismic.SharedSlice<
  "cta_block",
  CtaBlockSliceVariation
>;

/**
 * Primary content in *FullWidthCta → Default → Primary*
 */
export interface FullWidthCtaSliceDefaultPrimary {
  /**
   * Title field in *FullWidthCta → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *FullWidthCta → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for FullWidthCta Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FullWidthCtaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FullWidthCtaSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *FullWidthCta → With Pretitle → Primary*
 */
export interface FullWidthCtaSliceWithPretitlePrimary {
  /**
   * Pretitle field in *FullWidthCta → With Pretitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.withPretitle.primary.pretitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pretitle: prismic.KeyTextField;

  /**
   * Title field in *FullWidthCta → With Pretitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.withPretitle.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *FullWidthCta → With Pretitle → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.withPretitle.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * With Pretitle variation for FullWidthCta Slice
 *
 * - **API ID**: `withPretitle`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FullWidthCtaSliceWithPretitle = prismic.SharedSliceVariation<
  "withPretitle",
  Simplify<FullWidthCtaSliceWithPretitlePrimary>,
  never
>;

/**
 * Primary content in *FullWidthCta → With Pre And Post Title → Primary*
 */
export interface FullWidthCtaSliceWithPreAndPostTitlePrimary {
  /**
   * Pretitle field in *FullWidthCta → With Pre And Post Title → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.withPreAndPostTitle.primary.pretitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pretitle: prismic.KeyTextField;

  /**
   * Title field in *FullWidthCta → With Pre And Post Title → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.withPreAndPostTitle.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Post Title field in *FullWidthCta → With Pre And Post Title → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.withPreAndPostTitle.primary.post_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  post_title: prismic.KeyTextField;

  /**
   * Text field in *FullWidthCta → With Pre And Post Title → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.withPreAndPostTitle.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * With Pre And Post Title variation for FullWidthCta Slice
 *
 * - **API ID**: `withPreAndPostTitle`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FullWidthCtaSliceWithPreAndPostTitle = prismic.SharedSliceVariation<
  "withPreAndPostTitle",
  Simplify<FullWidthCtaSliceWithPreAndPostTitlePrimary>,
  never
>;

/**
 * Primary content in *FullWidthCta → With Post Title → Primary*
 */
export interface FullWidthCtaSlicePostTitlePrimary {
  /**
   * Title field in *FullWidthCta → With Post Title → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.postTitle.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Post Title field in *FullWidthCta → With Post Title → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.postTitle.primary.post_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  post_title: prismic.KeyTextField;

  /**
   * Text field in *FullWidthCta → With Post Title → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: full_width_cta.postTitle.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * With Post Title variation for FullWidthCta Slice
 *
 * - **API ID**: `postTitle`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FullWidthCtaSlicePostTitle = prismic.SharedSliceVariation<
  "postTitle",
  Simplify<FullWidthCtaSlicePostTitlePrimary>,
  never
>;

/**
 * Slice variation for *FullWidthCta*
 */
type FullWidthCtaSliceVariation =
  | FullWidthCtaSliceDefault
  | FullWidthCtaSliceWithPretitle
  | FullWidthCtaSliceWithPreAndPostTitle
  | FullWidthCtaSlicePostTitle;

/**
 * FullWidthCta Shared Slice
 *
 * - **API ID**: `full_width_cta`
 * - **Description**: FullWidthCta
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FullWidthCtaSlice = prismic.SharedSlice<
  "full_width_cta",
  FullWidthCtaSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → HeroWithLink → Primary*
 */
export interface HeroSliceHeroWithLinkPrimary {
  /**
   * Image field in *Hero → HeroWithLink → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLink.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Hero → HeroWithLink → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLink.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Hero → HeroWithLink → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLink.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Link field in *Hero → HeroWithLink → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLink.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Link Text field in *Hero → HeroWithLink → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLink.primary.link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField;
}

/**
 * HeroWithLink variation for Hero Slice
 *
 * - **API ID**: `heroWithLink`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHeroWithLink = prismic.SharedSliceVariation<
  "heroWithLink",
  Simplify<HeroSliceHeroWithLinkPrimary>,
  never
>;

/**
 * Primary content in *Hero → Hero With Prelink → Primary*
 */
export interface HeroSliceHeroWithPrelinkPrimary {
  /**
   * Image field in *Hero → Hero With Prelink → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithPrelink.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Hero → Hero With Prelink → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithPrelink.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Hero → Hero With Prelink → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithPrelink.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Prelink field in *Hero → Hero With Prelink → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithPrelink.primary.prelink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  prelink: prismic.LinkField;

  /**
   * Prelink Text field in *Hero → Hero With Prelink → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithPrelink.primary.prelink_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  prelink_text: prismic.KeyTextField;
}

/**
 * Hero With Prelink variation for Hero Slice
 *
 * - **API ID**: `heroWithPrelink`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHeroWithPrelink = prismic.SharedSliceVariation<
  "heroWithPrelink",
  Simplify<HeroSliceHeroWithPrelinkPrimary>,
  never
>;

/**
 * Primary content in *Hero → Hero With Link and Prelink → Primary*
 */
export interface HeroSliceHeroWithLinkAndPrelinkPrimary {
  /**
   * Image field in *Hero → Hero With Link and Prelink → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLinkAndPrelink.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Hero → Hero With Link and Prelink → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLinkAndPrelink.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Hero → Hero With Link and Prelink → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLinkAndPrelink.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Prelink field in *Hero → Hero With Link and Prelink → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLinkAndPrelink.primary.prelink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  prelink: prismic.LinkField;

  /**
   * Prelink Text field in *Hero → Hero With Link and Prelink → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLinkAndPrelink.primary.prelink_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  prelink_text: prismic.KeyTextField;

  /**
   * Link field in *Hero → Hero With Link and Prelink → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLinkAndPrelink.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Link Text field in *Hero → Hero With Link and Prelink → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithLinkAndPrelink.primary.link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField;
}

/**
 * Hero With Link and Prelink variation for Hero Slice
 *
 * - **API ID**: `heroWithLinkAndPrelink`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHeroWithLinkAndPrelink = prismic.SharedSliceVariation<
  "heroWithLinkAndPrelink",
  Simplify<HeroSliceHeroWithLinkAndPrelinkPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation =
  | HeroSliceDefault
  | HeroSliceHeroWithLink
  | HeroSliceHeroWithPrelink
  | HeroSliceHeroWithLinkAndPrelink;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *SplitImageText → Default → Primary*
 */
export interface SplitImageTextSliceDefaultPrimary {
  /**
   * Text field in *SplitImageText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *SplitImageText → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for SplitImageText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SplitImageTextSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *SplitImageText → Split Image Right → Primary*
 */
export interface SplitImageTextSliceSplitImageRightPrimary {
  /**
   * Text field in *SplitImageText → Split Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.splitImageRight.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *SplitImageText → Split Image Right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.splitImageRight.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Split Image Right variation for SplitImageText Slice
 *
 * - **API ID**: `splitImageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSliceSplitImageRight = prismic.SharedSliceVariation<
  "splitImageRight",
  Simplify<SplitImageTextSliceSplitImageRightPrimary>,
  never
>;

/**
 * Primary content in *SplitImageText → Split Button Left → Primary*
 */
export interface SplitImageTextSliceSplitButtonLeftPrimary {
  /**
   * Text field in *SplitImageText → Split Button Left → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.splitButtonLeft.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *SplitImageText → Split Button Left → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.splitButtonLeft.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Button Link field in *SplitImageText → Split Button Left → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.splitButtonLeft.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *SplitImageText → Split Button Left → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.splitButtonLeft.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Split Button Left variation for SplitImageText Slice
 *
 * - **API ID**: `splitButtonLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSliceSplitButtonLeft = prismic.SharedSliceVariation<
  "splitButtonLeft",
  Simplify<SplitImageTextSliceSplitButtonLeftPrimary>,
  never
>;

/**
 * Primary content in *SplitImageText → Split Button Right → Primary*
 */
export interface SplitImageTextSliceSplitButtonRightPrimary {
  /**
   * Text field in *SplitImageText → Split Button Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.splitButtonRight.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *SplitImageText → Split Button Right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.splitButtonRight.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Button Link field in *SplitImageText → Split Button Right → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.splitButtonRight.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *SplitImageText → Split Button Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.splitButtonRight.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Split Button Right variation for SplitImageText Slice
 *
 * - **API ID**: `splitButtonRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSliceSplitButtonRight = prismic.SharedSliceVariation<
  "splitButtonRight",
  Simplify<SplitImageTextSliceSplitButtonRightPrimary>,
  never
>;

/**
 * Primary content in *SplitImageText → Hero Section → Primary*
 */
export interface SplitImageTextSliceHeroSectionPrimary {
  /**
   * Background Colour field in *SplitImageText → Hero Section → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Hero background colour
   * - **Default Value**: Grey
   * - **API ID Path**: split_image_text.heroSection.primary.background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_colour: prismic.SelectField<"Grey" | "Green", "filled">;

  /**
   * Title field in *SplitImageText → Hero Section → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.heroSection.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Paragraph field in *SplitImageText → Hero Section → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.heroSection.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * Image field in *SplitImageText → Hero Section → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.heroSection.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Button Link field in *SplitImageText → Hero Section → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.heroSection.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *SplitImageText → Hero Section → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: split_image_text.heroSection.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Hero Section variation for SplitImageText Slice
 *
 * - **API ID**: `heroSection`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSliceHeroSection = prismic.SharedSliceVariation<
  "heroSection",
  Simplify<SplitImageTextSliceHeroSectionPrimary>,
  never
>;

/**
 * Slice variation for *SplitImageText*
 */
type SplitImageTextSliceVariation =
  | SplitImageTextSliceDefault
  | SplitImageTextSliceSplitImageRight
  | SplitImageTextSliceSplitButtonLeft
  | SplitImageTextSliceSplitButtonRight
  | SplitImageTextSliceHeroSection;

/**
 * SplitImageText Shared Slice
 *
 * - **API ID**: `split_image_text`
 * - **Description**: SplitImageText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SplitImageTextSlice = prismic.SharedSlice<
  "split_image_text",
  SplitImageTextSliceVariation
>;

/**
 * Item in *Testimonials → Default → Primary → Testimonial*
 */
export interface TestimonialsSliceDefaultPrimaryTestimonialItem {
  /**
   * Testimonial Text field in *Testimonials → Default → Primary → Testimonial*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial[].testimonial_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  testimonial_text: prismic.RichTextField;

  /**
   * Testimonial Author field in *Testimonials → Default → Primary → Testimonial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial[].testimonial_author
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testimonial_author: prismic.KeyTextField;
}

/**
 * Primary content in *Testimonials → Default → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
  /**
   * Testimonials Title field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonials_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testimonials_title: prismic.KeyTextField;

  /**
   * Testimonials Text field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonials_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  testimonials_text: prismic.RichTextField;

  /**
   * Testimonial field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  testimonial: prismic.GroupField<
    Simplify<TestimonialsSliceDefaultPrimaryTestimonialItem>
  >;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<
  "testimonials",
  TestimonialsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      AllDocumentTypes,
      CtaBlockSlice,
      CtaBlockSliceDefaultPrimaryCtaItem,
      CtaBlockSliceDefaultPrimary,
      CtaBlockSliceTestimonialWithPretitlePrimaryCtaItem,
      CtaBlockSliceTestimonialWithPretitlePrimary,
      CtaBlockSliceVariation,
      CtaBlockSliceDefault,
      CtaBlockSliceTestimonialWithPretitle,
      FullWidthCtaSlice,
      FullWidthCtaSliceDefaultPrimary,
      FullWidthCtaSliceWithPretitlePrimary,
      FullWidthCtaSliceWithPreAndPostTitlePrimary,
      FullWidthCtaSlicePostTitlePrimary,
      FullWidthCtaSliceVariation,
      FullWidthCtaSliceDefault,
      FullWidthCtaSliceWithPretitle,
      FullWidthCtaSliceWithPreAndPostTitle,
      FullWidthCtaSlicePostTitle,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceHeroWithLinkPrimary,
      HeroSliceHeroWithPrelinkPrimary,
      HeroSliceHeroWithLinkAndPrelinkPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceHeroWithLink,
      HeroSliceHeroWithPrelink,
      HeroSliceHeroWithLinkAndPrelink,
      SplitImageTextSlice,
      SplitImageTextSliceDefaultPrimary,
      SplitImageTextSliceSplitImageRightPrimary,
      SplitImageTextSliceSplitButtonLeftPrimary,
      SplitImageTextSliceSplitButtonRightPrimary,
      SplitImageTextSliceHeroSectionPrimary,
      SplitImageTextSliceVariation,
      SplitImageTextSliceDefault,
      SplitImageTextSliceSplitImageRight,
      SplitImageTextSliceSplitButtonLeft,
      SplitImageTextSliceSplitButtonRight,
      SplitImageTextSliceHeroSection,
      TestimonialsSlice,
      TestimonialsSliceDefaultPrimaryTestimonialItem,
      TestimonialsSliceDefaultPrimary,
      TestimonialsSliceVariation,
      TestimonialsSliceDefault,
    };
  }
}

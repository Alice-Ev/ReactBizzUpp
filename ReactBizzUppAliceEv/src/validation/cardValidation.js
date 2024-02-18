import Joi from "joi";

const titleSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
});
const subTitleSchema = Joi.object({
  subtitle: Joi.string().min(2).max(256).required(),
});
const descriptionSchema = Joi.object({
  description: Joi.string().min(2).max(1024).required(),
});
const phoneSchema = Joi.object({
  phone: Joi.string().min(9).max(11).required(),
});
const emailSchema = Joi.object({
  email: Joi.string().min(5).required(),
});
const webSchema = Joi.object({ web: Joi.string().min(14).allow("") });

const imageSchema = Joi.object({ image: Joi.string().min(14).required() });

const altSchema = Joi.object({ alt: Joi.string().min(2).max(256).allow("") });

const stateSchema = Joi.object({
  state: Joi.string().allow(""),
});
const countrySchema = Joi.object({
  country: Joi.string().required(),
});
const citySchema = Joi.object({
  city: Joi.string().required(),
});
const streetSchema = Joi.object({
  street: Joi.string().required(),
});
const houseNumberSchema = Joi.object({
  houseNumber: Joi.number().min(1).required(),
});
const zipSchema = Joi.object({
  zip: Joi.number().allow(""),
});

const validateTitleSchema = (title) => titleSchema.validate(title);
const validateSubTitleSchema = (subtitle) => subTitleSchema.validate(subtitle);
const validateDescriptionSchema = (description) =>
  descriptionSchema.validate(description);
const validatePhoneSchema = (phone) => phoneSchema.validate(phone);
const validateEmailSchema = (email) => emailSchema.validate(email);
const validateWebSchema = (web) => webSchema.validate(web);
const validateUrlSchema = (image) => imageSchema.validate(image);
const validateAltSchema = (alt) => altSchema.validate(alt);
const validateStateSchema = (state) => stateSchema.validate(state);
const validateCountrySchema = (country) => countrySchema.validate(country);
const validateCitySchema = (city) => citySchema.validate(city);
const validateStreetSchema = (street) => streetSchema.validate(street);
const validateHouseNumberSchema = (houseNumber) =>
  houseNumberSchema.validate(houseNumber);
const validateZipSchema = (zip) => zipSchema.validate(zip);

const validateSchema = {
  title: validateTitleSchema,
  subtitle: validateSubTitleSchema,
  description: validateDescriptionSchema,
  phone: validatePhoneSchema,
  email: validateEmailSchema,
  web: validateWebSchema,
  image: validateUrlSchema,
  alt: validateAltSchema,
  state: validateStateSchema,
  country: validateCountrySchema,
  city: validateCitySchema,
  street: validateStreetSchema,
  houseNumber: validateHouseNumberSchema,
  zip: validateZipSchema,
};

export default validateSchema;

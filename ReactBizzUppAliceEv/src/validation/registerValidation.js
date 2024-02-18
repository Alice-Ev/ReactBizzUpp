import Joi from "joi";

const firstSchema = Joi.object({
  first: Joi.string().min(2).max(256).required(),
});
const middleSchema = Joi.object({
  middle: Joi.string().min(2).max(256).allow(""),
});
const lastSchema = Joi.object({
  last: Joi.string().min(2).max(256).required(),
});
const phoneSchema = Joi.object({
  phone: Joi.string().min(9).max(11).required(),
});
const emailSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .required(),
});
const passwordSchema = Joi.object({
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,}$/
      )
    )
    .min(9)
    .max(20)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one uppercase, lowercase, special character(!@#$%^&*-), and number",
    }),
});
const urlSchema = Joi.object({
  url: Joi.string().min(14).max(256).allow(""),
});
const altSchema = Joi.object({
  alt: Joi.string().min(2).max(256).allow(""),
});
const stateSchema = Joi.object({
  state: Joi.string().min(2).max(256).allow(""),
});
const countrySchema = Joi.object({
  country: Joi.string().min(2).max(256).required(),
});
const citySchema = Joi.object({
  city: Joi.string().min(2).max(256).required(),
});
const streetSchema = Joi.object({
  street: Joi.string().min(2).max(256).required(),
});
const housenumberSchema = Joi.object({
  houseNumber: Joi.string().min(1).max(256).required(),
});
const zipSchema = Joi.object({
  zip: Joi.string().min(2).max(256).allow(""),
});
const isBusinessSchema = Joi.object({
  isBusiness: Joi.boolean().required(),
});

const validateFirstSchema = (first) => firstSchema.validate(first);
const validateMiddleSchema = (middle) => middleSchema.validate(middle);
const validateLastSchema = (last) => lastSchema.validate(last);
const validatePhoneSchema = (phone) => phoneSchema.validate(phone);
const validateEmailSchema = (email) => emailSchema.validate(email);
const validatePasswordSchema = (password) => passwordSchema.validate(password);
const validateurlSchema = (url) => urlSchema.validate(url);
const validatealtSchema = (alt) => altSchema.validate(alt);
const validatestateSchema = (state) => stateSchema.validate(state);
const validateCountrySchema = (country) => countrySchema.validate(country);
const validateCitySchema = (city) => citySchema.validate(city);
const validateStreetSchema = (street) => streetSchema.validate(street);
const validatehouseNumberSchema = (houseNumber) =>
  housenumberSchema.validate(houseNumber);
const validateZipSchema = (zip) => zipSchema.validate(zip);
const validateIsBusiness = (isBusiness) =>
  isBusinessSchema.validate(isBusiness);

const validateSchema = {
  first: validateFirstSchema,
  middle: validateMiddleSchema,
  last: validateLastSchema,
  phone: validatePhoneSchema,
  email: validateEmailSchema,
  password: validatePasswordSchema,
  url: validateurlSchema,
  alt: validatealtSchema,
  state: validatestateSchema,
  country: validateCountrySchema,
  city: validateCitySchema,
  street: validateStreetSchema,
  houseNumber: validatehouseNumberSchema,
  zip: validateZipSchema,
  isBusiness: validateIsBusiness,
};

export { validateSchema };

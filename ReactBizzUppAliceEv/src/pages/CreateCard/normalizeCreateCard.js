const toServerCreate = (datatoServer) => {
  return {
    title: datatoServer.title,
    subtitle: datatoServer.subtitle,
    description: datatoServer.description,
    phone: datatoServer.phone,
    email: datatoServer.email,
    web: datatoServer.web,
    image: {
      url: datatoServer.image,
      alt: datatoServer.alt,
    },
    address: {
      state: datatoServer.state,
      country: datatoServer.country,
      city: datatoServer.city,
      street: datatoServer.street,
      houseNumber: datatoServer.houseNumber,
      zip: datatoServer.zip,
    },
  };
};
export { toServerCreate };

const validations = () => {
  const regexp = new Map([
    ["name", /[^ а-яё]/i],
    ["email", /[^(a-z0-9)(.@_!-)]/i],
    ["message", /[^ а-яё0-9.,!?]/],
  ]);

  document.addEventListener("input", (e) => {
    const target = e.target,
      name = target.name;

    if (name && regexp.has(name)) {
      target.value = target.value.replace(regexp.get(name), "");
    }
  });
};

export default validations;

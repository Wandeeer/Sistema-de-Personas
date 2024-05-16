const tabla = (req, res) => {
  res.render("template/table", {
    pagina: "Registro de Usuarios",
  });
};

const formulario = (req, res) => {
  res.render("auth/formulario", {
    pagina: "Registro",
  });
};

const registro = (req, res) => {
  res.render("auth/formulario", {
    pagina: "Registro de nuevo usuario",
  });
};
export { formulario, registro, tabla };

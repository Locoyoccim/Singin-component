(function () {
  const ExpRegulares = {
    Fname: /^[a-zA-Z'-]+$/,
    Lname: /^[a-zA-Z'-]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  };

  let inputs = document.querySelectorAll("input");
  let boton = document.getElementsByClassName("buttom-form")[0];
  let form = document.getElementById("validation-information");

  const campos = {
    first_name: false,
    last_name: false,
    email: false,
    password: false,
  };

  const validar = (e) => {
    switch (e.target.name) {
      case "first_name":
        validations(ExpRegulares.Fname, e.target, "first_name");
        break;
      case "last_name":
        validations(ExpRegulares.Lname, e.target, "last_name");
        break;
      case "email":
        validations(ExpRegulares.email, e.target, "email");
        break;
      case "password":
        validations(ExpRegulares.pass, e.target, "password");
        break;
    }
  };

  const validations = (Expretion, input, campo) => {
    if (Expretion.test(input.value) || input.value === "") {
      document.getElementById(campo).classList.remove("active-error");
      document.getElementById(`icon-error-${campo}`).style.opacity = 0;
      campos[campo] = true;
    } else {
      document.getElementById(campo).classList.add("active-error");
      document.getElementById(`icon-error-${campo}`).style.opacity = 1;
      campos[campo] = false;
    }
  };

  inputs.forEach((input) => {
    input.addEventListener("keyup", validar);
    input.addEventListener("blur", validar);
  });

  boton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      campos.first_name &&
      campos.last_name &&
      campos.email &&
      campos.password
    ) {
      form.reset();
    } else {
      document.querySelectorAll(".error-msj").forEach((error) => {
        error.classList.add("active");
      });
      setTimeout(() => {
        document.querySelectorAll(".error-msj").forEach((error) => {
          error.classList.remove("active");
        });
      }, 3000);
    }
  });
  console.log(campos["Fname"]);
})();

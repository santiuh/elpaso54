<template>
  <div
    class="h-screen w-screen flex justify-center items-center text-center font-monse"
  >
    <div
      class="border rounded-md flex flex-col p-5 px-10 gap-5 items-center relative shadow-xl"
    >
      <img src="images/logo.png" alt="" class="w-44 bottom-48 absolute" />
      <div class="flex flex-col">
        <div>Usuario</div>
        <input type="text" class="border rounded-md" />
      </div>
      <div class="flex flex-col">
        <div>Contraseña</div>
        <input type="text" class="border rounded-md" />
      </div>
      <Boton texto="Iniciar Sesión" class="!py-3"></Boton>
    </div>
  </div>
</template>

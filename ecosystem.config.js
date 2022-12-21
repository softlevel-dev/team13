module.exports = {
  apps: [
   {
      name: "team13_dev",
      script: "yarn",
      args: "start"
   },
   {
      name: "team13_prod",
      script: "yarn",
      args: "build"
   }
  ]
}
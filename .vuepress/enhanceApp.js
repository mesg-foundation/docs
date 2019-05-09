export default ({ router }) => {
  router.addRoutes([
    { path: '/guide/start-here/*', redirect: '/guide/*' },
  ])
}
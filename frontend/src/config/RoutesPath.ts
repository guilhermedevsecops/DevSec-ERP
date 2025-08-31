const PathRoutes = {
    commonPath : {
        login: "/",
        registration : "/registration",
        notFound : "*"
    },

    protectedPath: {
        home : "/home",
        maintenance : "/maintenance",
        building : "/building",
        accessDenied : "/access-denied"
    }
}

export default PathRoutes;
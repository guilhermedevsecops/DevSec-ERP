const PathRoutes = {
    commonPath : {
        login: "/",
        registration : "/registration",
        notFound : "*",
        forgotPassword: "/forgot-password",
        resetPassword: "/reset-password/:token"
    },

    protectedPath: {
        home : "/home",
        maintenance : "/maintenance",
        building : "/building",
        accessDenied : "/access-denied"
    }
}

export default PathRoutes;
var completionSpec = {

    name: "ngrok",
    description: "expose a local web server to the internet",
    subcommands: [
        {
            name: "http",
            description: "expose a local web server to the internet",
            insertValue: "-http '{cursor}'",
            options: [
                {
                    name: ["-auth"],
                    insertValue: "-auth '{cursor}'",
                    description: "enforces HTTP Basic Auth on all requests",
                    args: {
                        variadic: true,
                        suggestions: [
                            {
                                name: "https://",
                                description: "forward to an https server by specifying the https:// scheme",
                                insertValue: "https://localhost:8443 '{cursor}'",
                            },
                            {
                                name: "folder",
                                description: "Share a folder on your computer with authentication",
                                insertValue: "=\"'{cursor}'\" ",
                            },
                            {
                                name: "password.protect",
                                description: "Password-protect your tunnel using =\"username:password\" format",
                                insertValue: "='{cursor}'",
                            },
                            {
                                name: "port",
                                description: "forward to the default https port on localhost",
                                insertValue: "443 '{cursor}'",
                            }
                        ],
                    },
                },
                {
                    name: ["-subdomain"],
                    insertValue: "-subdomain='{cursor}'",
                    description: "specify a custom subdomain for your tunnel URL",
                    args: {},
                },
                {
                    name: "<port>",
                    insertValue: "'{cursor}'",
                    description: "expose a web server on port <port> of your local machine to the internet",
                },
            ]
        },
        {
            name: "authtoken",
            description: "add (or modify) the authtoken property in your ngrok configuration file",
            insertValue: "authtoken '{cursor}'",
            options: [
                {
                    name: ["<YOUR_AUTHTOKEN>"],
                    insertValue: "<'{cursor}'>",
                    description: "<YOUR_AUTHTOKEN>",
                    args: {},
                },
        
            ]
        },
    ]
}

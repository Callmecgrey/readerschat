### server/

```text
├── src/
│   ├── controllers/
│   │   ├── chatController.ts
│   │   ├── authController.ts
│   │   ├── userController.ts
│   │   ├── readersController.ts
│   │   └── statusController.ts
│   ├── middlewares/
│   │   ├── authMiddleware.ts
│   │   └── errorMiddleware.ts
│   ├── models/
│   │   ├── Message.ts
│   │   ├── User.ts
│   │   ├── Status.ts
│   │   └── index.ts
│   ├── routes/
│   │   ├── chatRoutes.ts
│   │   ├── authRoutes.ts
│   │   ├── userRoutes.ts
│   │   ├── readersRoutes.ts
│   │   └── statusRoutes.ts
│   ├── services/
│   │   ├── chatService.ts
│   │   ├── authService.ts
│   │   ├── userService.ts
│   │   ├── readersService.ts
│   │   └── statusService.ts
│   ├── utils/
│   │   ├── websocket.ts
│   │   ├── logger.ts
│   │   └── jwt.ts
│   ├── config/
│   │   ├── db.ts
│   │   └── env.ts
│   ├── types/
│   │   └── index.ts
│   ├── app.ts
│   └── server.ts
├── tsconfig.json
├── package.json
├── .env
└── .gitignore
```
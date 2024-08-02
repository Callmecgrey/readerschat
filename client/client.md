### client/

```text
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── videos/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Signup.tsx
│   │   │   └── AuthForm.tsx
│   │   ├── Chat/
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── MessageInput.tsx
│   │   │   ├── MessageList.tsx
│   │   │   └── EmojiPicker.tsx
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── Readers/
│   │   │   └── FindReaders.tsx
│   │   ├── Status/
│   │   │   ├── UploadStatus.tsx
│   │   │   └── RateNovel.tsx
│   │   └── common/
│   │       └── Button.tsx
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── ChatContext.tsx
│   ├── hooks/
│   │   ├── useAuth.tsx
│   │   └── useWebSocket.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   ├── chat.tsx
│   │   ├── find-readers.tsx
│   │   ├── upload-status.tsx
│   │   └── rate-novel.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── api.ts
│   │   └── auth.ts
│   └── App.tsx
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── next.config.js
```
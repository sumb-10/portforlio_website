# 🧑‍💻 Portfolio — Hojin Cho

**조호진(Hojin Cho)**의 개인 포트폴리오 웹사이트입니다.  
단정하고 읽기 쉬운 흑백 그리드 디자인으로, 한 페이지 안에서 개발자 소개·기술 스택·프로젝트·연락처 정보를 간결하게 보여줍니다.

---

## ✨ Features

- **1페이지 구성** — Header, About, Skills, Projects, Contact, Footer로 구성  
- **반응형 디자인** — 모바일/데스크탑 모두 자연스러운 레이아웃  
- **심플한 그리드 구조** — 각 섹션을 얇은 black border로 구분  
- **구조적 컴포넌트 설계** — `sections/` 단위로 유지보수 용이  
- **Vite + TypeScript 기반** — 빠른 빌드 속도와 타입 안정성  

---

## 📁 Project Structure

src/
├─ sections/
│ ├─ Header.tsx # 자기소개 / 학력 / 경력
│ ├─ About.tsx # Who am I / Interests / Professions
│ ├─ Skills.tsx # 기술 스택
│ ├─ Projects.tsx # 대표 프로젝트 카드
│ ├─ Contact.tsx # 이메일 및 소셜 링크
│ └─ Footer.tsx # 푸터
│
├─ App.tsx # 전체 페이지 구조
├─ App.css # 공통 스타일
└─ main.tsx # 진입점


---

## 🛠️ Tech Stack

| Category | Tech |
|-----------|------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Language** | TypeScript |
| **Deployment** | Vercel or Netlify |
# 🐍 Python – Interactive Programming Notes

An interactive digital Python textbook designed to make learning Python easier, more organized, and engaging. It transforms traditional programming notes into a feature-rich website with easy navigation, topic searching, reading progress tracking, and bookmarks.

## 🌐 Overview

This project provides a structured platform to learn Python through an interactive web interface.

Each lesson includes a short introduction, a clear explanation, key takeaways, and worked examples so the book can be used as a self-contained written resource.

## ✨ Features

- **📚 Chapter Indexing:** Organized chapters and topics for easy navigation.
- **📊 Reading Progress:** Automatically tracks completed topics and overall learning progress.
- **🔖 Bookmarks:** Save important topics and revisit them anytime.
- **🔍 Smart Search:** Search for any chapter, topic, or programming concept.
- **🌙 Dark & Light Mode:** Switch between dark and normal themes.
- **📖 Interactive Reading:** Clean and structured interface for a better learning experience.
- **👁️ View Counter:** Displays website view counts.
- **🔐 User Authentication:** Sign in with email to sync reading progress and bookmarks across devices.
- **✉️ Contact Form:** Visitors can send help requests and suggestions to the site owner's inbox.
- **📱 User-Friendly Interface:** Simple navigation and organized content.

## 🚀 Website Highlights

| Feature           | Description |
| ----------------- | ----------- |
| Chapters          | 28          |
| Lessons           | 68          |
| Worked examples   | 71          |
| Progress Tracking | Yes         |
| Bookmarks         | Yes         |
| Search            | Yes         |
| Theme Switching   | Yes         |
| Contact form      | Yes         |

## 🔐 Supabase Authentication Setup

The site uses Supabase email/password authentication and stores each signed-in reader's bookmarks and completed topics in Supabase. Reading remains public; without signing in, progress and bookmarks continue to be saved in the browser.

1. Create a Supabase project and enable email authentication.
2. In `supabase-config.js`, set `url` to the project's URL and `publishableKey` to its publishable (or legacy `anon`) key. These browser credentials are public; **never use a service-role key** in this file.
3. In the Supabase SQL Editor, run:

   ```sql
   create table if not exists public.user_learning_data (
     user_id uuid primary key references auth.users(id) on delete cascade,
     bookmarks text[] not null default '{}',
     visited_topics text[] not null default '{}',
     updated_at timestamptz not null default now()
   );

   alter table public.user_learning_data enable row level security;
   grant select, insert, update, delete
     on public.user_learning_data to authenticated;

   drop policy if exists "Readers can manage their own learning data"
     on public.user_learning_data;
   create policy "Readers can manage their own learning data"
     on public.user_learning_data
     for all
     using (auth.uid() = user_id)
     with check (auth.uid() = user_id);
   ```

4. Add your deployed site URL to Supabase **Authentication → URL Configuration → Redirect URLs**. Email confirmation must be enabled/disabled as desired in the Supabase email provider settings.

First sign-in merges browser-saved bookmarks and progress into the account. After sign-in, learning data is kept separately for each account on that browser and synced to Supabase.

### Google sign-in

Google sign-in is optional and does not require buying a domain. Configure it before using the **Continue with Google** button:

1. Open [Google Cloud Console](https://console.cloud.google.com/) and create or select a project. In **Google Auth Platform**, configure the app branding and audience. While the app is in testing mode, add the Google accounts that should be able to sign in as test users.
2. Open **Google Auth Platform → Clients → Create client**. Choose **Web application**. Under **Authorized JavaScript origins**, add the origin where this site runs (for local testing, add the local origin such as `http://localhost:8000`; for deployment, add your site's origin, without a path).
3. In **Authorized redirect URIs**, add the Supabase callback URL shown on the Google provider settings page. For this project it is `https://gomnnjllhzbovurlirlg.supabase.co/auth/v1/callback`.
4. Create the client and copy its **Client ID** and **Client secret**.
5. In Supabase, open **Authentication → Sign In / Providers → Google**, enable Google, paste the Client ID and Client secret, and save.
6. In Supabase **Authentication → URL Configuration → Redirect URLs**, add the site's full origin (for example, `http://localhost:8000` during local testing and your deployed site origin). Google sign-in returns to the origin that started the sign-in.
7. Open the site, click **Sign in → Continue with Google**, and choose a Google account. Google handles account verification; app email confirmation settings do not need to send a confirmation email for Google sign-in.

Do not put the Google Client secret in this repository or in `supabase-config.js`; keep it only in the Supabase provider settings. Google's OAuth consent screen may show a testing warning while the app remains in testing mode.

### Contact form

The contact form sends a visitor's name, email, optional phone number, topic, and message to `nitishprajapati6759@gmail.com` through FormSubmit. FormSubmit is an external service that processes the submission. On the first test submission, check the inbox and confirm FormSubmit's activation email; submissions will not be delivered until the address is confirmed. If FormSubmit is unavailable, the form offers a `mailto:` fallback that opens the visitor's email app with their message prefilled. Do not ask visitors to include passwords or other sensitive information.

## 🛠️ Upcoming Features

- [x] User Login and Registration
- [x] Save learning progress across devices
- [ ] Personalized user dashboard
- [ ] More interactive coding examples
- [ ] Quiz and practice questions
- [ ] Improved mobile responsiveness

## 🎯 Project Goal

The main goal of this project is to make learning more accessible and interactive through organized content, easy navigation, and useful productivity features.

## 👨‍💻 Author

**Nitish Kumar**

B.Tech – Computer Science and Engineering

National Institute of Technology, Silchar

---

⭐ If you find this project useful, consider giving this repository a star!

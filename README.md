# Call Guardian

Create a frontend-only web application called "FraudGuard AI".

IMPORTANT:

This is ONLY the frontend/UI for now.

Do NOT build the backend.

Do NOT build the ML model.

Do NOT add a real LLM API.

Do NOT add a real Whisper integration.

Do NOT create database functionality.

We will connect the real Python ML backend later through APIs.

PROJECT:

FraudGuard AI is an AI-powered voice fraud call detector.

The user uploads a call recording, and eventually the backend will:

Audio → Speech-to-Text → ML Fraud Detection → Risk Score → Threat Detection → LLM Explanation.

For now, create a polished frontend using realistic DEMO/MOCK DATA.

==================================================

DESIGN GOAL

==================================================

The UI must be extremely easy to understand.

A user or hackathon judge should understand within 3 seconds:

1. Is this call FRAUD or SAFE?

2. How dangerous is it?

3. Why was it detected?

4. What should the user do?

The most important element on the screen must be:

🚨 FRAUD DETECTED

92 / 100

CRITICAL RISK

Do NOT hide the result inside a small card.

==================================================

VISUAL STYLE

==================================================

Create a premium modern cybersecurity + AI design.

Style:

- Dark background

- Professional cybersecurity feel

- Modern glassmorphism cards

- Clean layout

- Large readable typography

- Subtle gradients

- Smooth micro-animations

- Good spacing

- Rounded cards

- Minimal clutter

- Professional hackathon-quality UI

Colors:

- Red = Fraud / Critical

- Orange = Warning / Suspicious

- Green = Safe

- Neutral white/gray for normal content

Avoid:

- Excessive neon effects

- Too many charts

- Too many colors

- Complicated navigation

- Technical jargon

- Generic admin dashboard appearance

The design should feel like a real consumer security product.

==================================================

APP BRANDING

==================================================

Logo:

Shield + voice/waveform icon

Name:

FraudGuard AI

Subtitle:

AI Voice Fraud Detector

Tagline:

"Your AI-powered second brain against voice fraud."

Top-right:

● AI Protection Active

==================================================

NAVIGATION

==================================================

Create a simple navigation bar:

- Dashboard

- Analyze Call

- Call History

Keep navigation minimal.

==================================================

DASHBOARD

==================================================

Create a clean landing/dashboard page.

Hero heading:

"Know when a call is trying to scam you."

Subtitle:

"Upload a call recording and let AI detect suspicious behavior before it's too late."

Primary button:

"Analyze a Call"

Secondary buttons:

"Try Scam Demo"

"Try Safe Demo"

Below the hero, show four simple statistics:

Calls Analyzed

24

Frauds Detected

9

Average Risk

67%

Protection

Active

==================================================

ANALYZE CALL PAGE

==================================================

Create a large audio upload area.

Show:

🎙️

"Upload Call Recording"

"Drag & drop your audio file here"

"MP3, WAV, M4A"

Button:

"Choose Audio File"

After selecting an audio file show:

- File name

- File size

- Audio player

- Remove file button

Large primary button:

"🔍 Analyze Call"

For now, clicking Analyze Call should use DEMO DATA.

==================================================

ANALYSIS ANIMATION

==================================================

When Analyze Call is clicked, show a beautiful short analysis animation.

Steps:

🎙️ Transcribing call...

🤖 Analyzing conversation...

🛡️ Checking fraud signals...

🧠 Preparing safety explanation...

Show progress visually.

After the animation, display the fraud result.

==================================================

MOST IMPORTANT RESULT

==================================================

For the scam demo show:

🚨 FRAUD DETECTED

92 / 100

CRITICAL RISK

Large warning message:

🛑 DO NOT SHARE YOUR OTP

Also show:

ML Confidence

94%

Threat Signals

4

Make this result visually dominant.

==================================================

SAFE RESULT

==================================================

For the safe demo show:

✅ NO FRAUD DETECTED

08 / 100

LOW RISK

Message:

"This conversation does not contain strong fraud indicators."

Use green styling.

==================================================

WHY DID AI FLAG THIS?

==================================================

Create a section:

"Why did AI flag this?"

Show large simple threat cards.

Example:

🔴 OTP REQUEST

"Caller asked for your OTP"

Severity: HIGH

🔴 ACCOUNT THREAT

"Caller threatened to block the account"

Severity: HIGH

🟠 URGENCY

"Caller pressured the user to act immediately"

Severity: MEDIUM

🟠 BANK IMPERSONATION

"Caller claimed to represent a bank"

Severity: MEDIUM

🟠 MONEY REQUEST

"Caller requested a money transfer"

Severity: HIGH

Each card should clearly show:

- Icon

- Threat name

- Simple explanation

- Severity

==================================================

CALL TRANSCRIPT

==================================================

Section title:

"📝 What the caller said"

Display transcript in a conversation-style card.

Example:

CALLER:

"Hello, I am calling from your bank."

CALLER:

"Your KYC has expired."

CALLER:

"Your account will be blocked today."

CALLER:

"Please tell me the OTP you received."

Highlight suspicious phrases.

For example:

"Your account will be blocked today."

→ orange/red warning highlight

"Please tell me the OTP you received."

→ red high-risk highlight

Make the transcript very readable.

==================================================

AI EXPLANATION

==================================================

Section:

"🤖 Why this call is suspicious"

Show:

"This call shows multiple scam indicators. The caller appears to impersonate a bank representative, creates urgency by threatening account suspension, and requests an OTP."

Keep the explanation simple.

Do not use complicated ML terminology here.

==================================================

WHAT YOU SHOULD DO

==================================================

Create a strong safety section:

"🛑 What you should do"

Three large cards:

1.

🔒

"Do NOT share OTP or PIN"

2.

📵

"End the call"

3.

🏦

"Contact your bank using its official number"

Make these actions highly visible.

==================================================

CALL HISTORY

==================================================

Create a clean Recent Calls section.

Example:

🔴 Bank KYC Call

Risk: 92/100

Fraud Detected

Today

🔴 UPI Refund Call

Risk: 86/100

Fraud Detected

Yesterday

🟢 Delivery Call

Risk: 08/100

Safe

Yesterday

Show:

"View All"

==================================================

DEMO MODE

==================================================

Create two working demo buttons:

"🚨 Try Scam Demo"

When clicked, populate the UI with:

Transcript:

"Hello, I am calling from your bank. Your KYC has expired. Your account will be blocked today. Please tell me the OTP you received."

Result:

FRAUD DETECTED

Risk:

92 / 100

Risk Level:

CRITICAL

Threats:

OTP Request

KYC Threat

Urgency

Bank Impersonation

AI Explanation:

"This call is highly suspicious because the caller is requesting an OTP while creating urgency and pretending to represent a bank."

Safety:

Do NOT share OTP.

End the call.

Contact your bank through its official number.

--------------------------------------------------

"🟢 Try Safe Demo"

Transcript:

"Your order has been shipped and will arrive tomorrow."

Result:

NO FRAUD DETECTED

Risk:

08 / 100

Risk Level:

LOW

Message:

"This conversation does not contain strong fraud indicators."

==================================================

RESPONSIVE DESIGN

==================================================

Make the UI responsive for:

- Desktop

- Laptop

- Tablet

- Mobile

The main fraud result must remain highly visible on smaller screens.

==================================================

COMPONENT STRUCTURE

==================================================

Create reusable components for:

- Header

- Navigation

- DashboardStats

- AudioUploader

- AnalysisProgress

- RiskResult

- RiskScore

- ThreatSignals

- Transcript

- AIExplanation

- SafetyActions

- CallHistory

- Footer

Keep components clean and reusable.

==================================================

FUTURE BACKEND INTEGRATION

==================================================

IMPORTANT:

The frontend must be structured so that we can later connect a Python backend.

Eventually the API will return:

{

  transcript,

  prediction,

  scam_probability,

  risk_score,

  risk_level,

  detected_indicators,

  explanation,

  safety_actions

}

For now use mock/demo data.

Do NOT hard-code the architecture in a way that makes API integration difficult later.

Create a clean service/API layer placeholder for future backend integration.

==================================================

FINAL USER EXPERIENCE

==================================================

The ideal experience should be:

Open FraudGuard AI

↓

Upload call

↓

Click Analyze

↓

Short analysis animation

↓

Immediately show:

🚨 FRAUD DETECTED

92 / 100

CRITICAL RISK

↓

Why?

OTP + Urgency + Bank Impersonation

↓

Read transcript

↓

Read AI explanation

↓

See safety actions

The user should understand the result without needing technical knowledge.

IMPORTANT:

This is a frontend-only prototype.

Use mock data.

Make it visually impressive but extremely easy to understand.

Do not implement backend, ML, Whisper, LLM API, database, or authentication yet.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2fec0aa2-f2af-4a5c-b3d4-2f515797bfb4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

# THE SILENT PATIENT – Give Pain a Voice
### المريض الصامت – امنح الألم صوتاً
**AI-Powered Patient Communication & Pain Assessment Platform (Interactive Frontend Prototype)**

---

## 🏥 1. Project Overview

**THE SILENT PATIENT** is a modern, hospital-inspired healthcare technology platform designed to bridge the communication gap for patients who cannot speak or face severe speech difficulties, including:
- Patients with **Expressive Aphasia** after ischemic or hemorrhagic stroke.
- Intubated or post-tracheostomy ICU patients.
- Patients with progressive motor neuron disorders such as **ALS** (Amyotrophic Lateral Sclerosis).
- Patients recovering from laryngeal or maxillofacial surgery with temporary vocal cord paralysis.
- Dependent, bedbound hospital patients needing urgent assistance without vocal exhaustion.

The platform provides a dignified, visual interface that empowers patients to voice their needs, pinpoint pain location on an interactive anatomical body map, rate pain severity on a 0–10 clinical scale, and communicate instantly with bedside staff through browser-based voice synthesis.

---

## ✨ 2. Key Features & Page Structure

### 🏠 A. Overview / Landing Page
- **Hero Banner:** "THE SILENT PATIENT – Give Pain a Voice" with mission statement and clinical cohort context.
- **4 Core Interactive Modules:** Quick navigation to Communication, Pain Assessment, Doctor Dashboard, and Neuro Analysis.
- **Bedside Emergency SOS:** Instant one-tap nurse buzzer with high-priority audio-visual alarm.
- **Live Vitals Ribbon:** Active telemetry overview (Heart Rate, SpO₂, Blood Pressure, Body Temperature).

### 💬 B. Page 1: Patient Communication
- **Welcome Title:** *"How are you feeling today?"* (*"كيف تشعر اليوم؟"*)
- **12 Core Predefined Clinical Needs Cards:**
  1. **أشعر بالألم** (*I feel pain* / *J'ai mal*)
  2. **أحتاج إلى الماء** (*I need water* / *J'ai besoin d'eau*)
  3. **أحتاج إلى الطعام** (*I need food* / *J'ai faim*)
  4. **أحتاج إلى المرحاض** (*I need the bathroom* / *J'ai besoin des toilettes*)
  5. **أشعر بالبرد** (*I feel cold* / *J'ai froid*)
  6. **أشعر بالحرارة** (*I feel hot* / *J'ai chaud*)
  7. **أشعر بالغثيان** (*I feel nauseous* / *J'ai la nausée*)
  8. **أحتاج إلى المساعدة** (*I need help* / *J'ai besoin d'aide*)
  9. **أريد تغيير وضعيتي** (*I want to change my position* / *Je veux changer de position*)
  10. **أريد التواصل مع عائلتي** (*I want to contact my family* / *Je veux contacter ma famille*)
  11. **أريد رؤية الطبيب** (*I want to see the doctor* / *Je veux voir le médecin*)
  12. **أحتاج إلى النوم** (*I need to sleep* / *J'ai besoin de dormir*)
- **Voice Generator (`window.speechSynthesis`):** Text-to-speech engine reading the full sentence aloud in Arabic, English, or French.
- **Quick Affirmations Grid:** Instant responses for *Yes*, *No*, *Thank You*, *Feeling Better*, *Feeling Worse*, and *Feeling Anxious*.
- **Live Bedside Feed:** Audit trail tracking sent requests, timestamp, urgency, and nursing attendance status.

### 🩺 C. Page 2: Pain Assessment
- **1. Anatomical Body Map (Front & Back Views):**
  - Switchable 2D SVG diagram featuring **Head, Neck, Chest, Abdomen, Back, Arms, Hands, Legs, and Feet**.
  - Interactive selection highlights, animated targeting radar, and pain intensity color-coding.
- **2. Pain Intensity Scale (0 to 10):**
  - Clinical Wong-Baker visual scale with responsive emoticons and dynamic color gradients.
  - 0 = *No pain*, 10 = *Worst possible unbearable pain*.
- **3. Pain Type & Character:**
  - Selectable descriptors: **Sharp**, **Burning**, **Stabbing**, **Dull/Aching**, **Throbbing**, and **Continuous**.
- **4. Pain Onset Timing:**
  - Temporal classification: *Just now*, *A few minutes ago*, *A few hours ago*, *Several days ago*.
- **Summary Confirmation Modal:** Comprehensive clinical overview with vocalization option, electronic medical chart logging, and seamless transfer to the Doctor Dashboard.

### 📊 D. Page 3: Doctor Dashboard
- **Hospital Ward View:** Ward B (Neuro-Rehabilitation & Palliative Care Unit).
- **Executive Metric Cards:** Total Patient Messages, Logged Pain Reports, Unresolved Requests, Ward Mean Pain Level.
- **Active Patient Clinical Overview Card:** Displays live vital signs, speech barrier cause, and opens a full **Clinical Patient Dossier Modal** (diagnostics, speech-language pathologist care protocol, active pharmacological regimen).
- **Patient Request Table:** Real-time stream with priority filtering (All, Urgent, Pending) and nurse action buttons (*"Attend Room"*, *"Resolve"*).
- **Pain History Timeline:** Chronological algic logs showing anatomical regions, intensity scores, and clinical review status.
- **Interactive SVG Charts:** 24-Hour Pain Trajectory curve and Aggregated Patient Request distribution.

### 🧠 E. Page 4: Neuro Analysis (AI Research Preview)
- **Prominent Research Disclaimer:** *"Experimental Prototype – AI Integration Coming Soon"*.
- **4 Demonstration Cards:**
  1. **Facial Expression Analysis:** 468-point facial landmark mesh simulation, Grimace Scale, Brow Furrow (AU4), Orbit Tightening (AU6/7), and Nasolabial Fold tension.
  2. **Body Movement Analysis:** Restlessness Index, Involuntary Fine Tremor waveform, Postural Shift Rate, and Musculoskeletal Rigidity.
  3. **Contactless Physiological Markers (rPPG):** Sub-dermal micro-hemodynamic fluctuations via RGB optical sensors (Heart Rate BPM, HRV RMSSD, Respiratory Rate).
  4. **Multimodal Fusion & Composite Distress Score:** Bayesian fusion composite pain probability score with interactive scenario triggers (*Simulate Acute Pain Spike*, *Simulate Baseline Calm*, *Simulate Motor Agitation*).

### ⚙️ F. Settings & Accessibility
- **Voice Customization:** Speech rate slider (0.5x – 1.5x) and voice pitch slider.
- **Language Switcher:** Instant runtime switching between **Arabic (العربية - RTL default)**, **English (US - LTR)**, and **French (Français - LTR)**.
- **Motor Accessibility:** Oversized touch targets mode for patients with tremors or motor limitations.
- **Persistence:** LocalStorage integration for simulated history.

---

## 🛠️ 3. Technical Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS (Custom medical color palette: sky, turquoise, emerald, lavender, rose)
- **Icons:** Lucide React
- **Voice Engine:** Web Speech API (`window.speechSynthesis`)
- **Direction & Typography:** Full RTL (`dir="rtl"`) support for Arabic (Cairo font) & LTR for English/French (Inter font).
- **Build Tool:** Vite 6

---

## 🚀 4. How to Run the Project

### Prerequisites
- Node.js (v18 or higher) and npm.

### Quick Start Commands

```bash
# 1. Open the project folder
cd "c:\Users\Hp\Desktop\projet"

# 2. Start the development server
npm run dev
```

The application will start immediately at:
👉 **`http://localhost:3000`** (or next available port).

### Production Build

```bash
# Compile TypeScript and generate optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 📐 5. Architecture & Code Organization

```
projet/
├── index.html                  # HTML entry point with Cairo & Inter fonts
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Healthcare palette configuration
├── vite.config.ts              # Vite server & React plugin configuration
├── src/
│   ├── main.tsx                # React root mount
│   ├── App.tsx                 # Layout orchestrator
│   ├── index.css               # Tailwind & medical grid styling
│   ├── types/
│   │   └── index.ts            # Clinical types (Patient, Pain, Neuro, Messages)
│   ├── locales/
│   │   ├── ar.ts               # Arabic translations (Default, RTL)
│   │   ├── en.ts               # English translations
│   │   └── fr.ts               # French translations
│   ├── context/
│   │   ├── LanguageContext.tsx # i18n & dynamic RTL/LTR switching
│   │   └── AppContext.tsx      # Bedside state, TTS, pain & message storage
│   ├── components/
│   │   ├── layout/             # Sidebar, Header, MobileNav
│   │   ├── common/             # NotificationToast, Modals, Badges
│   │   ├── communication/      # CommunicationCard, QuickNeedsGrid, MessageHistoryFeed
│   │   ├── pain/               # InteractiveBodyMap, PainScale, PainTypeSelector, SummaryModal
│   │   ├── doctor/             # PatientOverviewCard, PatientDetailsModal, MessagesTable, TrendsChart
│   │   └── neuro/              # FacialAnalysisCard, BodyMovementCard, PhysiologicalCard, FusionCard
│   └── pages/
│       ├── OverviewPage.tsx        # Homepage with 4 module cards & mission
│       ├── CommunicationPage.tsx   # 12 interactive cards & TTS voice generator
│       ├── PainAssessmentPage.tsx  # Interactive anatomical body map & 0-10 scale
│       ├── DoctorDashboardPage.tsx # Hospital ward dashboard & telemetry
│       ├── NeuroAnalysisPage.tsx   # Experimental AI multi-modal simulator
│       └── SettingsPage.tsx        # Voice rate/pitch, language & accessibility
```

---

*Designed and engineered as a high-fidelity frontend prototype for future AI-powered healthcare platforms.*

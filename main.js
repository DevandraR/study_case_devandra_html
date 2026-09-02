/**
 * OMNINEXUS AI - CONTACT CENTER LANDING PAGE SCRIPT
 * Interactive Simulator, Dynamic ROI Calculator, FAQ Accordion & Analytics
 */

document.addEventListener('DOMContentLoaded', () => {
  initWaveformVisualizer();
  initSimulator();
  initRoiCalculator();
  initFaqAccordion();
  initCounterAnimations();
  initMobileNav();
  initContactForm();
});

/* ==========================================================================
   1. Live Audio Waveform Visualizer
   ========================================================================== */
function initWaveformVisualizer() {
  const container = document.getElementById('waveformContainer');
  if (!container) return;

  const totalBars = 32;
  container.innerHTML = '';

  for (let i = 0; i < totalBars; i++) {
    const bar = document.createElement('div');
    bar.className = 'wf-bar';
    const initialHeight = Math.floor(Math.random() * 20) + 6;
    bar.style.height = `${initialHeight}px`;
    container.appendChild(bar);
  }

  // Animate waveform randomly
  setInterval(() => {
    const bars = container.querySelectorAll('.wf-bar');
    bars.forEach((bar) => {
      const h = Math.floor(Math.random() * 26) + 4;
      bar.style.height = `${h}px`;
    });
  }, 180);
}

/* ==========================================================================
   2. Interactive Live Copilot & Sentiment Simulator Engine
   ========================================================================== */
const SCENARIO_DATA = {
  1: {
    callerName: "Rian Anggoro",
    callerAvatar: "RA",
    callerMeta: "Tier: Platinum Priority Customer • ID: #CUST-9014",
    channelBadge: "KANAL: VOICE CALL (IVR PASSTHROUGH)",
    timer: "00:48",
    confidence: "AI Confidence: 98.6%",
    sentimentText: "Frustrasi (Tinggi)",
    sentimentPercent: 82,
    sentimentTags: [
      { text: "Urgent Billing Issue", type: "alert" },
      { text: "Payment Gateway Timeout", type: "neutral" },
      { text: "High Churn Risk Potential", type: "alert" }
    ],
    script: '"Mohon maaf atas ketidaknyamanannya, Bapak Rian. Kami memvalidasi adanya antrean settlement dari bank mitra pada pukul 14:15. Saldo Anda aman dan dana otomatis dikreditkan kembali dalam 15 menit."',
    actionBtnText: "⚡ Otorisasi Cek Status Gateway",
    acwText: "[TICKET #89412] Transaksi QRIS Rp 1.250.000 Tertunda • Status: Auto-Reconciled • Disposisi: Solved (FCR) • Root Cause: Bank Partner 504 Timeout • Sentimen Akhir: Positif (94%)",
    transcript: [
      {
        speaker: "Pelanggan (Rian)",
        type: "customer",
        text: "Halo, saya sudah transfer via QRIS 1,2 juta tapi status di aplikasi masih pending dan kasir merchant menolak pesanan saya! Tolong segera dibatalkan atau proses sekarang!"
      },
      {
        speaker: "AI Copilot (Real-Time Whisper)",
        type: "agent",
        text: "⚡ Analisis: Transaksi ID #TX-44819 mengalami delay batch settlement dari Switcher Bank. Tidak ada indikasi fraud. Rekomendasi tindakan: Trigger API status update & informasikan auto-refund."
      },
      {
        speaker: "Agen (Siti)",
        type: "agent",
        text: "Selamat siang Bapak Rian, kami sangat memahami urgensi transaksi Anda. Sistem kami langsung mendeteksi transaksi QRIS tersebut dan sedang melakukan rekonsiliasi instan ke rekening Anda."
      }
    ]
  },
  2: {
    callerName: "Sarah Wijaya",
    callerAvatar: "SW",
    callerMeta: "Lead Engineer • PT Nusa Retail Enterprise • ID: #CORP-5021",
    channelBadge: "KANAL: WEB CHAT (IN-APP DEVELOPER DESK)",
    timer: "01:15",
    confidence: "AI Confidence: 99.2%",
    sentimentText: "Netral / Kritis (Teknis)",
    sentimentPercent: 45,
    sentimentTags: [
      { text: "Webhook 429 Rate Limit", type: "alert" },
      { text: "Production Traffic Spike", type: "neutral" },
      { text: "API v3 Integration", type: "neutral" }
    ],
    script: '"Halo Sarah, log kami mendeteksi lonjakan payload webhook pada endpoint /v3/order-events mencapai 3.200 req/sec. Kami telah menaikkan burst limit tenant Anda secara otomatis ke 5.000 req/sec."',
    actionBtnText: "⚡ Refresh Quota & Whitelist Endpoint",
    acwText: "[TICKET #89413] Webhook HTTP 429 Throttling • Status: Resolved • Action: Burst Limit Scaled to 5k RPS • SLA Impact: 0s Downtime • Log: Attached to Datadog Trace #8849",
    transcript: [
      {
        speaker: "Pelanggan (Sarah - Developer)",
        type: "customer",
        text: "Tim kami menerima error HTTP 429 Too Many Requests saat flash sale pukul 14:00. Apakah ada limitasi baru di endpoint webhook pesanan?"
      },
      {
        speaker: "AI Copilot (Real-Time Whisper)",
        type: "agent",
        text: "⚡ Analisis: Traffic melonjak 280% melebihi baseline Tier 2. SOP menyarankan kenaikan kuota darurat flash-sale selama 4 jam tanpa biaya tambahan."
      },
      {
        speaker: "Agen (Kevin)",
        type: "agent",
        text: "Halo Sarah, kami telah memverifikasi payload burst limit Anda dan langsung mengaktifkan high-concurrency channel untuk memastikan seluruh event pesanan terkirim tanpa antrean."
      }
    ]
  },
  3: {
    callerName: "Hendra Kusuma",
    callerAvatar: "HK",
    callerMeta: "Director of Operations • CV Graha Logistik • ID: #CUST-1082",
    channelBadge: "KANAL: WHATSAPP BUSINESS PRIORITY ESCL",
    timer: "02:04",
    confidence: "AI Confidence: 97.4%",
    sentimentText: "Kecewa (Retensi / Churn Risk)",
    sentimentPercent: 74,
    sentimentTags: [
      { text: "Subscription Renewal At Risk", type: "alert" },
      { text: "Feature Request: Custom SLA", type: "neutral" },
      { text: "Account Value: Rp 84 Juta/thn", type: "alert" }
    ],
    script: '"Selamat siang Pak Hendra, kami mendengar masukan Bapak mengenai kebutuhan reporting custom multi-cabang. Fitur ini sudah masuk dalam release roadmap minggu depan, dan kami ingin menawarkan dedicated Account Manager untuk pendampingan langsung."',
    actionBtnText: "⚡ Assign Dedicated Senior Consultant",
    acwText: "[TICKET #89414] Churn Prevention Intervention • Status: Retained / In Progress • Key Action: Scheduled Executive Review & Custom Analytics Provision • Health Score: Rebounding",
    transcript: [
      {
        speaker: "Pelanggan (Hendra)",
        type: "customer",
        text: "Kami sedang mempertimbangkan untuk tidak memperpanjang kontrak tahunan jika modul laporan multi-cabang belum bisa diekspor ke SAP."
      },
      {
        speaker: "AI Copilot (Real-Time Whisper)",
        type: "agent",
        text: "⚡ Profiling: Klien berpotensi Churn (LTV tinggi). Connector SAP sudah tersedia di staging v4.3. Tawarkan akses early preview dan sesi integrasi teknis 1-on-1."
      },
      {
        speaker: "Agen (Dian)",
        type: "agent",
        text: "Terima kasih atas keterbukaan Bapak Hendra. Kami sangat menghargai kemitraan kita. Solusi konektor SAP sudah selesai diuji dan kami siap mendemonstrasikannya khusus untuk tim Bapak hari Kamis ini."
      }
    ]
  }
};

function initSimulator() {
  const scenarioBtns = document.querySelectorAll('.scenario-btn');
  if (!scenarioBtns.length) return;

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const scenarioId = btn.getAttribute('data-scenario');
      
      // Update Active Button
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Render Scenario Content
      loadScenario(scenarioId);
    });
  });

  // Action Buttons
  const btnApplyScript = document.getElementById('btnApplyScript');
  if (btnApplyScript) {
    btnApplyScript.addEventListener('click', () => {
      const originalText = btnApplyScript.innerText;
      btnApplyScript.innerText = "✓ Disalin ke Chat Agen";
      btnApplyScript.style.background = "#14D495";
      setTimeout(() => {
        btnApplyScript.innerText = originalText;
        btnApplyScript.style.background = "";
      }, 2000);
    });
  }

  const btnAutoRefund = document.getElementById('btnAutoRefund');
  if (btnAutoRefund) {
    btnAutoRefund.addEventListener('click', () => {
      const originalText = btnAutoRefund.innerText;
      btnAutoRefund.innerText = "✓ Eksekusi Sukses (200 OK)";
      btnAutoRefund.style.borderColor = "#10B981";
      btnAutoRefund.style.color = "#10B981";
      setTimeout(() => {
        btnAutoRefund.innerText = originalText;
        btnAutoRefund.style.borderColor = "";
        btnAutoRefund.style.color = "";
      }, 2200);
    });
  }
}

function loadScenario(id) {
  const data = SCENARIO_DATA[id];
  if (!data) return;

  // Elements
  const callerAvatar = document.getElementById('simCallerAvatar');
  const callerName = document.getElementById('simCallerName');
  const callerMeta = document.getElementById('simCallerMeta');
  const channelBadge = document.getElementById('simChannelBadge');
  const callTimer = document.getElementById('simCallTimer');
  const simConfidence = document.getElementById('simConfidence');
  const sentimentBadge = document.getElementById('sentimentBadge');
  const sentimentMeterFill = document.getElementById('sentimentMeterFill');
  const sentimentTags = document.getElementById('sentimentTags');
  const simSuggestedScript = document.getElementById('simSuggestedScript');
  const simAcwText = document.getElementById('simAcwText');
  const transcriptFeed = document.getElementById('transcriptFeed');
  const btnAutoRefund = document.getElementById('btnAutoRefund');

  // Update Data
  if (callerAvatar) callerAvatar.textContent = data.callerAvatar;
  if (callerName) callerName.textContent = data.callerName;
  if (callerMeta) callerMeta.textContent = data.callerMeta;
  if (channelBadge) channelBadge.textContent = data.channelBadge;
  if (callTimer) callTimer.textContent = data.timer;
  if (simConfidence) simConfidence.textContent = data.confidence;
  
  if (sentimentBadge) {
    sentimentBadge.textContent = data.sentimentText;
    if (data.sentimentPercent > 70) {
      sentimentBadge.style.background = "rgba(244, 63, 94, 0.15)";
      sentimentBadge.style.color = "var(--accent-rose)";
    } else {
      sentimentBadge.style.background = "rgba(6, 182, 212, 0.15)";
      sentimentBadge.style.color = "var(--accent-cyan)";
    }
  }

  if (sentimentMeterFill) {
    sentimentMeterFill.style.width = `${data.sentimentPercent}%`;
  }

  // Tags
  if (sentimentTags) {
    sentimentTags.innerHTML = data.sentimentTags.map(tag => 
      `<span class="tag ${tag.type === 'alert' ? 'tag-alert' : 'tag-neutral'}">${tag.text}</span>`
    ).join('');
  }

  // Script
  if (simSuggestedScript) {
    const scriptP = simSuggestedScript.querySelector('.script-text');
    if (scriptP) scriptP.textContent = data.script;
  }

  if (btnAutoRefund) {
    btnAutoRefund.innerText = data.actionBtnText;
  }

  // ACW
  if (simAcwText) {
    simAcwText.textContent = data.acwText;
  }

  // Transcript
  if (transcriptFeed) {
    transcriptFeed.innerHTML = data.transcript.map(item => `
      <div class="msg-bubble ${item.type === 'customer' ? 'msg-customer' : 'msg-agent'}">
        <span class="msg-speaker mono">${item.speaker}</span>
        <p class="msg-text">${item.text}</p>
      </div>
    `).join('');
    transcriptFeed.scrollTop = transcriptFeed.scrollHeight;
  }
}

/* ==========================================================================
   3. Interactive ROI & Operational Calculator
   ========================================================================== */
function initRoiCalculator() {
  const agentSlider = document.getElementById('agentCount');
  const ticketSlider = document.getElementById('ticketVolume');
  const ahtSlider = document.getElementById('currentAht');

  const agentDisplay = document.getElementById('agentCountVal');
  const ticketDisplay = document.getElementById('ticketVolumeVal');
  const ahtDisplay = document.getElementById('currentAhtVal');

  const resSavedHours = document.getElementById('resSavedHours');
  const resAutoTickets = document.getElementById('resAutoTickets');
  const resCostSavings = document.getElementById('resCostSavings');

  if (!agentSlider || !ticketSlider || !ahtSlider) return;

  function calculateROI() {
    const agents = parseInt(agentSlider.value, 10);
    const tickets = parseInt(ticketSlider.value, 10);
    const aht = parseFloat(ahtSlider.value);

    // Update Slider Labels
    agentDisplay.textContent = `${agents.toLocaleString('id-ID')} Agen`;
    ticketDisplay.textContent = `${tickets.toLocaleString('id-ID')} Tiket`;
    ahtDisplay.textContent = `${aht.toFixed(1)} Menit`;

    // Mathematical Estimations
    // 1. Automated deflection rate = 65% of repetitive tickets
    const autoDeflected = Math.round(tickets * 0.65);

    // 2. Remaining 35% handled by agents with 40% AHT reduction via Copilot + ACW automation
    const manualTickets = tickets * 0.35;
    const minutesSavedPerManualTicket = aht * 0.40; // 40% reduction
    const totalMinutesSaved = (autoDeflected * aht) + (manualTickets * minutesSavedPerManualTicket);
    const totalHoursSaved = Math.round(totalMinutesSaved / 60);

    // 3. Operational Cost Savings (Estimated Rp 60,000 / agent-hour benchmark in Indonesia)
    const costSavingsRupiah = totalHoursSaved * 60000;
    const costSavingsJuta = Math.round(costSavingsRupiah / 1000000);

    // Render Results
    resSavedHours.innerHTML = `${totalHoursSaved.toLocaleString('id-ID')} <small>Jam/Bulan</small>`;
    resAutoTickets.innerHTML = `${autoDeflected.toLocaleString('id-ID')} <small>Tiket</small>`;
    
    if (costSavingsJuta >= 1000) {
      const milyar = (costSavingsJuta / 1000).toFixed(2);
      resCostSavings.innerHTML = `Rp ${milyar} <small>Miliar / Bln</small>`;
    } else {
      resCostSavings.innerHTML = `Rp ${costSavingsJuta.toLocaleString('id-ID')} <small>Juta / Bln</small>`;
    }
  }

  agentSlider.addEventListener('input', calculateROI);
  ticketSlider.addEventListener('input', calculateROI);
  ahtSlider.addEventListener('input', calculateROI);

  // Initial calculation
  calculateROI();
}

/* ==========================================================================
   4. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(i => {
        i.classList.remove('active');
        const t = i.querySelector('.faq-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   5. Smooth KPI Counter Animation
   ========================================================================== */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 1500;
          const step = Math.ceil(target / (duration / 30));
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = current;
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.2 });

  const metricsStrip = document.querySelector('.hero-metrics-strip');
  if (metricsStrip) {
    observer.observe(metricsStrip);
  }
}

/* ==========================================================================
   6. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (!mobileToggle || !mainNav) return;

  mobileToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  // Close nav on link click
  const navLinks = mainNav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
    });
  });
}

/* ==========================================================================
   7. Contact & Demo Lead Form Submission Mockup
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const btnSubmit = document.getElementById('btnSubmitForm');
  const successMsg = document.getElementById('formSuccessMessage');

  if (!form || !btnSubmit || !successMsg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Visual button state
    const originalBtnContent = btnSubmit.innerHTML;
    btnSubmit.innerHTML = `<span>Memproses Data Enkripsi...</span>`;
    btnSubmit.style.opacity = '0.8';
    btnSubmit.disabled = true;

    setTimeout(() => {
      btnSubmit.style.display = 'none';
      successMsg.style.display = 'block';
      form.reset();
    }, 900);
  });
}

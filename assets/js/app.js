(function () {
  const PRIVATE_PASSCODE = "temple2026";

  const members = [
    {
      id: "m001",
      name: "Ramesh Iyer",
      role: "Trustee",
      city: "Edison, NJ",
      phone: "+15551234501",
      birthday: "1968-03-14",
      family: "Iyer Family",
      reminder: true,
      initials: "RI",
      notes: "Coordinates festival planning and donor communication."
    },
    {
      id: "m002",
      name: "Lakshmi Narayan",
      role: "Puja Coordinator",
      city: "Dallas, TX",
      phone: "+15551234502",
      birthday: "1975-08-22",
      family: "Narayan Family",
      reminder: true,
      initials: "LN",
      notes: "Maintains vastra pujan schedule and priest coordination."
    },
    {
      id: "m003",
      name: "Suresh Rao",
      role: "Treasurer",
      city: "Atlanta, GA",
      phone: "+15551234503",
      birthday: "1971-11-09",
      family: "Rao Family",
      reminder: true,
      initials: "SR",
      notes: "Handles receipts, accounts, and donation reporting."
    },
    {
      id: "m004",
      name: "Anitha Sharma",
      role: "Volunteer Lead",
      city: "Frisco, TX",
      phone: "",
      birthday: "1982-06-02",
      family: "Sharma Family",
      reminder: false,
      initials: "AS",
      notes: "Organizes member volunteers during major events."
    },
    {
      id: "m005",
      name: "Venkatesh Prasad",
      role: "Cultural Programs",
      city: "Tampa, FL",
      phone: "+15551234504",
      birthday: "1965-12-18",
      family: "Prasad Family",
      reminder: true,
      initials: "VP",
      notes: "Plans devotional music and youth cultural programs."
    },
    {
      id: "m006",
      name: "Meena Krishnan",
      role: "Member Relations",
      city: "Charlotte, NC",
      phone: "+15551234505",
      birthday: "1980-01-27",
      family: "Krishnan Family",
      reminder: true,
      initials: "MK",
      notes: "Keeps member contact details and family participation updated."
    }
  ];

  const vahanas = [
    {
      name: "Pedda Sesha Vahanam",
      day: "Day 1",
      symbol: "Sesha",
      detail: "Traditionally associated with the divine serpent Adisesha and the opening grandeur of the festival."
    },
    {
      name: "Chinna Sesha Vahanam",
      day: "Day 2",
      symbol: "Sesha",
      detail: "A smaller Sesha procession used to continue the devotional sequence with a more intimate seva mood."
    },
    {
      name: "Hamsa Vahanam",
      day: "Day 2",
      symbol: "Swan",
      detail: "Represents wisdom, purity, and the ability to distinguish truth with clarity."
    },
    {
      name: "Simha Vahanam",
      day: "Day 3",
      symbol: "Lion",
      detail: "Represents courage, protection, and royal strength in the Lord's procession."
    },
    {
      name: "Muthyapu Pandiri Vahanam",
      day: "Day 3",
      symbol: "Pearl canopy",
      detail: "A pearl-themed canopy procession often described with beauty, grace, and festive ornamentation."
    },
    {
      name: "Kalpavriksha Vahanam",
      day: "Day 4",
      symbol: "Wish-giving tree",
      detail: "Represents blessing, prosperity, and the divine wish-fulfilling tree."
    },
    {
      name: "Sarvabhoopala Vahanam",
      day: "Day 4",
      symbol: "Universal kingship",
      detail: "Honors the Lord as the sovereign protector over all rulers and devotees."
    },
    {
      name: "Mohini Vahanam",
      day: "Day 5",
      symbol: "Mohini form",
      detail: "A procession connected with divine enchantment, grace, and the Lord's compassionate form."
    },
    {
      name: "Garuda Vahanam",
      day: "Day 5",
      symbol: "Garuda",
      detail: "One of the most important vahanas, symbolizing devotion, service, and divine protection."
    }
  ];

  const defaultEvents = [
    {
      id: "evt-brahmotsavam",
      name: "Brahmotsavam Opening",
      date: "2026-09-15",
      time: "6:00 PM",
      type: "Festival",
      details: "Festival opening prayers, vahana seva planning, and prasadam coordination.",
      source: "default"
    },
    {
      id: "evt-garuda-seva",
      name: "Garuda Vahana Seva",
      date: "2026-09-19",
      time: "7:00 PM",
      type: "Seva",
      details: "Special Garuda vahana procession with volunteer and sponsor assignments.",
      source: "default"
    },
    {
      id: "evt-vaikunta",
      name: "Vaikunta Ekadashi",
      date: "2026-12-20",
      time: "5:30 AM",
      type: "Festival",
      details: "Early mandir opening, special darshan arrangements, and community prasadam.",
      source: "default"
    },
    {
      id: "evt-satyanarayana",
      name: "Monthly Satyanarayana Pooja",
      date: "2026-08-01",
      time: "5:00 PM",
      type: "Pooja",
      details: "Family pooja and group prasadam. Registration details can be added by the temple office.",
      source: "default"
    }
  ];

  const defaultDarshanHighlights = [
    {
      id: "highlight-opening",
      label: "Opening",
      value: "5:30 AM",
      description: "Suprabhatam and morning preparation",
      source: "default"
    },
    {
      id: "highlight-morning",
      label: "Public Darshan",
      value: "6:30 AM - 12:30 PM",
      description: "Morning darshan window",
      source: "default"
    },
    {
      id: "highlight-evening",
      label: "Evening Darshan",
      value: "5:00 PM - 8:30 PM",
      description: "Evening darshan and closing prayers",
      source: "default"
    }
  ];

  const defaultDarshanSchedule = [
    {
      id: "schedule-open",
      time: "5:30 AM",
      activity: "Mandir Opens",
      details: "Suprabhatam, lamp lighting, and temple preparation.",
      source: "default"
    },
    {
      id: "schedule-morning-arti",
      time: "6:00 AM",
      activity: "Morning Arti",
      details: "First arti of the day with devotional chanting.",
      source: "default"
    },
    {
      id: "schedule-morning-darshan",
      time: "6:30 AM - 12:30 PM",
      activity: "Morning Darshan",
      details: "General darshan for devotees and visitors.",
      source: "default"
    },
    {
      id: "schedule-break",
      time: "12:30 PM - 4:30 PM",
      activity: "Mandir Break",
      details: "Alankaram, naivedyam, and internal temple activities.",
      source: "default"
    },
    {
      id: "schedule-evening-open",
      time: "5:00 PM",
      activity: "Evening Reopening",
      details: "Mandir reopens for evening darshan and seva.",
      source: "default"
    },
    {
      id: "schedule-sandhya",
      time: "6:30 PM",
      activity: "Sandhya Arti",
      details: "Evening arti with lamps, bells, and bhajans.",
      source: "default"
    },
    {
      id: "schedule-close-arti",
      time: "8:15 PM",
      activity: "Closing Arti",
      details: "Final prayer before mandir closing.",
      source: "default"
    },
    {
      id: "schedule-close",
      time: "8:30 PM",
      activity: "Mandir Closes",
      details: "Temple closes for the day.",
      source: "default"
    }
  ];

  const defaultArtis = [
    {
      id: "arti-suprabhatam",
      name: "Suprabhatam Arti",
      description: "Early morning prayer and awakening seva before public darshan begins.",
      source: "default"
    },
    {
      id: "arti-morning",
      name: "Morning Arti",
      description: "Morning lamp offering with devotional chants and temple bells.",
      source: "default"
    },
    {
      id: "arti-naivedyam",
      name: "Naivedyam Arti",
      description: "Prayer connected with food offering and midday temple rituals.",
      source: "default"
    },
    {
      id: "arti-sandhya",
      name: "Sandhya Arti",
      description: "Evening arti performed during the main evening darshan window.",
      source: "default"
    },
    {
      id: "arti-shayana",
      name: "Shayana Arti",
      description: "Closing prayer before the mandir closes for the day.",
      source: "default"
    }
  ];

  const defaultPoojas = [
    {
      id: "pooja-archana",
      name: "Archana",
      description: "Name and nakshatra-based prayer offering for devotees and families.",
      source: "default"
    },
    {
      id: "pooja-abhishekam",
      name: "Abhishekam",
      description: "Special sacred bathing ritual performed on selected days or by booking.",
      source: "default"
    },
    {
      id: "pooja-vastra",
      name: "Vastra Pujan",
      description: "Cloth offering for birthday, anniversary, or special family occasions.",
      source: "default"
    },
    {
      id: "pooja-sahasranama",
      name: "Sahasranama Archana",
      description: "Devotional recitation of divine names with flower offering.",
      source: "default"
    },
    {
      id: "pooja-satyanarayana",
      name: "Satyanarayana Pooja",
      description: "Family pooja for blessings, gratitude, and auspicious events.",
      source: "default"
    },
    {
      id: "pooja-prasadam",
      name: "Prasadam Sponsorship",
      description: "Community prasadam support for festival days or weekly gatherings.",
      source: "default"
    }
  ];

  const stores = {
    events: {
      customKey: "tmtFestiveCalendarEvents",
      deletedKey: "tmtDeletedDefaultEventIds",
      defaults: defaultEvents,
      prefix: "evt"
    },
    highlights: {
      customKey: "tmtDarshanHighlights",
      deletedKey: "tmtDeletedDarshanHighlightIds",
      defaults: defaultDarshanHighlights,
      prefix: "highlight"
    },
    schedule: {
      customKey: "tmtDarshanSchedule",
      deletedKey: "tmtDeletedDarshanScheduleIds",
      defaults: defaultDarshanSchedule,
      prefix: "schedule"
    },
    artis: {
      customKey: "tmtArtiTypes",
      deletedKey: "tmtDeletedArtiTypeIds",
      defaults: defaultArtis,
      prefix: "arti"
    },
    poojas: {
      customKey: "tmtPoojaOfferings",
      deletedKey: "tmtDeletedPoojaOfferingIds",
      defaults: defaultPoojas,
      prefix: "pooja"
    }
  };

  const defaultReminderMessage =
    "Namaste {name}, this is a reminder for your birthday vastra pujan at Narsi Balaji Mandir. Please contact the temple office for offering details. Govinda Govinda.";

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function readJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch (error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function readManaged(kind) {
    const config = stores[kind];
    const deleted = new Set(readJson(config.deletedKey, []));
    const custom = readJson(config.customKey, []);
    return [
      ...config.defaults.filter((record) => !deleted.has(record.id)),
      ...custom
    ];
  }

  function writeCustom(kind, records) {
    writeJson(stores[kind].customKey, records);
  }

  function readDeleted(kind) {
    return new Set(readJson(stores[kind].deletedKey, []));
  }

  function writeDeleted(kind, deleted) {
    writeJson(stores[kind].deletedKey, Array.from(deleted));
  }

  function saveManaged(kind, record) {
    const config = stores[kind];
    const defaults = new Set(config.defaults.map((item) => item.id));
    const deleted = readDeleted(kind);
    const custom = readJson(config.customKey, []);
    const id = record.id || `${config.prefix}-${Date.now()}`;
    const saved = { ...record, id, source: "custom" };
    const index = custom.findIndex((item) => item.id === id);

    if (defaults.has(id)) {
      deleted.add(id);
      writeDeleted(kind, deleted);
    }

    if (index >= 0) {
      custom[index] = saved;
    } else {
      custom.push(saved);
    }
    writeCustom(kind, custom);
  }

  function deleteManaged(kind, id) {
    const config = stores[kind];
    const defaults = new Set(config.defaults.map((item) => item.id));
    const custom = readJson(config.customKey, []).filter((item) => item.id !== id);
    writeCustom(kind, custom);

    if (defaults.has(id)) {
      const deleted = readDeleted(kind);
      deleted.add(id);
      writeDeleted(kind, deleted);
    }
  }

  function resetForm(form) {
    form.reset();
    qsa("input[type='hidden']", form).forEach((input) => {
      input.value = "";
    });
  }

  function formatBirthday(dateValue) {
    const date = new Date(`${dateValue}T00:00:00`);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  function formatDate(date) {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

  function formatEventDate(dateValue) {
    const date = new Date(`${dateValue}T00:00:00`);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

  function toDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function birthdayOccurrence(year, birthday) {
    const parts = birthday.split("-").map(Number);
    const month = parts[1];
    const day = Math.min(parts[2], daysInMonth(year, month));
    return new Date(year, month - 1, day);
  }

  function calculateNextReminder(birthday, daysBefore, fromDate = new Date()) {
    const today = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
    let birthdayDate = birthdayOccurrence(today.getFullYear(), birthday);
    let reminderDate = new Date(birthdayDate);
    reminderDate.setDate(reminderDate.getDate() - Number(daysBefore));

    if (reminderDate < today) {
      birthdayDate = birthdayOccurrence(today.getFullYear() + 1, birthday);
      reminderDate = new Date(birthdayDate);
      reminderDate.setDate(reminderDate.getDate() - Number(daysBefore));
    }

    const msPerDay = 24 * 60 * 60 * 1000;
    return {
      birthdayDate,
      reminderDate,
      daysUntil: Math.round((reminderDate - today) / msPerDay)
    };
  }

  function setActiveNav() {
    const file = window.location.pathname.split("/").pop() || "index.html";
    const key = file.replace(".html", "") === "index" ? "home" : file.replace(".html", "");
    qsa("[data-nav]").forEach((link) => {
      if (link.dataset.nav === key) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setupNavigation() {
    const toggle = qs(".nav-toggle");
    const nav = qs(".site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function addLockButton() {
    const nav = qs(".site-nav");
    if (!nav || qs("#lockPrivatePage")) return;

    const button = document.createElement("button");
    button.id = "lockPrivatePage";
    button.className = "nav-lock";
    button.type = "button";
    button.textContent = "Lock";
    button.addEventListener("click", () => {
      sessionStorage.removeItem("tmtAdminUnlocked");
      window.location.reload();
    });
    nav.appendChild(button);
  }

  function requirePrivateAccess(onUnlock) {
    if (document.body.dataset.private !== "true") {
      return true;
    }

    if (sessionStorage.getItem("tmtAdminUnlocked") === "true") {
      addLockButton();
      return true;
    }

    document.body.classList.add("private-locked");
    const gate = document.createElement("section");
    gate.className = "access-gate";
    gate.innerHTML = `
      <form class="access-card" id="accessForm">
        <p class="eyebrow">Private admin page</p>
        <h1>Access Required</h1>
        <p>Enter the temple admin passcode to view private admin tools.</p>
        <label>
          Passcode
          <input id="accessPasscode" type="password" autocomplete="current-password" required>
        </label>
        <button class="button primary" type="submit">Unlock Page</button>
        <p id="accessError" class="form-error" role="alert"></p>
      </form>
    `;
    document.body.appendChild(gate);

    qs("#accessForm", gate).addEventListener("submit", (event) => {
      event.preventDefault();
      const value = qs("#accessPasscode", gate).value;
      if (value === PRIVATE_PASSCODE) {
        sessionStorage.setItem("tmtAdminUnlocked", "true");
        gate.remove();
        document.body.classList.remove("private-locked");
        addLockButton();
        onUnlock();
        return;
      }
      qs("#accessError", gate).textContent = "Incorrect passcode.";
    });

    return false;
  }

  function renderMembers() {
    const grid = qs("#memberGrid");
    if (!grid) return;

    const search = qs("#memberSearch");

    function draw() {
      const term = (search.value || "").trim().toLowerCase();
      const filtered = members.filter((member) => {
        const haystack = `${member.name} ${member.role} ${member.city} ${member.family}`.toLowerCase();
        const matchesSearch = !term || haystack.includes(term);
        return matchesSearch;
      });

      grid.innerHTML = filtered.map((member) => `
        <article class="member-card">
          <div class="avatar" aria-label="Photo placeholder for ${escapeHtml(member.name)}">${escapeHtml(member.initials)}</div>
          <div>
            <div class="member-card-head">
              <h2>${escapeHtml(member.name)}</h2>
            </div>
            <p class="role">${escapeHtml(member.role)}</p>
            <dl class="detail-list">
              <div><dt>Family</dt><dd>${escapeHtml(member.family)}</dd></div>
              <div><dt>City</dt><dd>${escapeHtml(member.city)}</dd></div>
              <div><dt>Birthday</dt><dd>${formatBirthday(member.birthday)}</dd></div>
            </dl>
            <p>${escapeHtml(member.notes)}</p>
          </div>
        </article>
      `).join("");

      if (!filtered.length) {
        grid.innerHTML = '<p class="empty-state">No members match this filter.</p>';
      }
    }

    search.addEventListener("input", draw);
    draw();
  }

  function renderVahanas() {
    const grid = qs("#vahanaGrid");
    if (!grid) return;

    grid.innerHTML = vahanas.map((vahana, index) => `
      <article class="vahana-card">
        <div class="vahana-number">${String(index + 1).padStart(2, "0")}</div>
        <p class="eyebrow">${escapeHtml(vahana.day)} / ${escapeHtml(vahana.symbol)}</p>
        <h2>${escapeHtml(vahana.name)}</h2>
        <p>${escapeHtml(vahana.detail)}</p>
        <label>
          Seva notes
          <textarea rows="3" placeholder="Add sponsor, vastra, prasadam, or volunteer notes"></textarea>
        </label>
      </article>
    `).join("");
  }

  function renderDarshanPage() {
    const highlights = qs("#darshanHighlights");
    const table = qs("#darshanTableBody");
    const artiGrid = qs("#artiGrid");
    const poojaGrid = qs("#poojaGrid");

    if (highlights) {
      const records = readManaged("highlights");
      highlights.innerHTML = records.map((item) => `
        <article>
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `).join("") || '<p class="empty-state">No darshan highlights added yet.</p>';
    }

    if (table) {
      const records = readManaged("schedule");
      table.innerHTML = records.map((item) => `
        <tr>
          <td data-label="Time">${escapeHtml(item.time)}</td>
          <td data-label="Activity">${escapeHtml(item.activity)}</td>
          <td data-label="Details">${escapeHtml(item.details)}</td>
        </tr>
      `).join("") || '<tr><td colspan="3" class="empty-cell">No darshan timetable rows added yet.</td></tr>';
    }

    if (artiGrid) {
      const records = readManaged("artis");
      artiGrid.innerHTML = records.map((item) => `
        <article class="info-panel">
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `).join("") || '<p class="empty-state">No arti types added yet.</p>';
    }

    if (poojaGrid) {
      const records = readManaged("poojas");
      poojaGrid.innerHTML = records.map((item) => `
        <article class="pooja-card">
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `).join("") || '<p class="empty-state">No pooja offerings added yet.</p>';
    }
  }

  function populateMemberSelect(select) {
    if (!select) return;
    select.innerHTML = members.map((member) => `
      <option value="${escapeHtml(member.id)}">${escapeHtml(member.name)} - ${formatBirthday(member.birthday)}</option>
    `).join("");
  }

  function setupReminders() {
    const form = qs("#reminderForm");
    if (!form) return;

    const memberSelect = qs("#reminderMember");
    const channelSelect = qs("#reminderChannel");
    const timingSelect = qs("#reminderTiming");
    const messageInput = qs("#reminderMessage");
    const output = qs("#reminderOutput");
    const dueCheckButton = qs("#runReminderCheck");
    const dueCheckResult = qs("#dueCheckResult");

    populateMemberSelect(memberSelect);

    function selectedMember() {
      return members.find((member) => member.id === memberSelect.value) || members[0];
    }

    function refreshMessage() {
      const member = selectedMember();
      messageInput.value = defaultReminderMessage.replace("{name}", member.name);
    }

    function readRules() {
      return readJson("tmtAnnualReminderRules", []);
    }

    function writeRules(rules) {
      writeJson("tmtAnnualReminderRules", rules);
    }

    function saveRule(rule) {
      const rules = readRules();
      const index = rules.findIndex((item) => item.memberId === rule.memberId && item.channel === rule.channel);
      if (index >= 0) {
        rules[index] = { ...rules[index], ...rule, updatedAt: new Date().toISOString() };
      } else {
        rules.unshift({ ...rule, createdAt: new Date().toISOString() });
      }
      writeRules(rules);
      renderReminderRules();
    }

    function buildSendLink(rule) {
      if (!rule.phone) return "";
      return rule.channel === "whatsapp"
        ? `https://wa.me/${rule.phone.replace(/\D/g, "")}?text=${encodeURIComponent(rule.message)}`
        : `sms:${rule.phone}?&body=${encodeURIComponent(rule.message)}`;
    }

    function renderReminderRules() {
      const rules = readRules();
      if (!rules.length) {
        output.innerHTML = '<p class="empty-state">No annual reminder rules saved yet.</p>';
        return;
      }

      output.innerHTML = rules.map((rule) => {
        const schedule = calculateNextReminder(rule.birthday, rule.daysBefore);
        const href = buildSendLink(rule);
        const dueLabel = schedule.daysUntil === 0
          ? "Due today"
          : `${schedule.daysUntil} day${schedule.daysUntil === 1 ? "" : "s"} away`;
        return `
          <article class="reminder-card">
            <div>
              <p class="eyebrow">${escapeHtml(rule.channel.toUpperCase())} / ${escapeHtml(rule.timingLabel)}</p>
              <h3>${escapeHtml(rule.memberName)}</h3>
              <dl class="inline-details">
                <div><dt>Birthday</dt><dd>${formatBirthday(rule.birthday)}</dd></div>
                <div><dt>Next reminder</dt><dd>${formatDate(schedule.reminderDate)}</dd></div>
                <div><dt>Next birthday</dt><dd>${formatDate(schedule.birthdayDate)}</dd></div>
                <div><dt>Status</dt><dd>${escapeHtml(dueLabel)}</dd></div>
              </dl>
              <p>${escapeHtml(rule.message)}</p>
              <small>Phone: ${escapeHtml(rule.phone || "Missing")} | Repeats every year automatically</small>
            </div>
            ${rule.phone ? `<a class="button secondary" href="${href}" target="_blank" rel="noreferrer">Open Message</a>` : '<span class="status-pill warning">Phone needed</span>'}
          </article>
        `;
      }).join("");
    }

    function checkDueToday() {
      const todayKey = toDateKey(new Date());
      const dueRules = readRules().filter((rule) => {
        const schedule = calculateNextReminder(rule.birthday, rule.daysBefore);
        return toDateKey(schedule.reminderDate) === todayKey;
      });

      if (!dueRules.length) {
        dueCheckResult.textContent = "No reminder rules are due today.";
        return;
      }

      dueCheckResult.textContent = `${dueRules.length} reminder rule${dueRules.length === 1 ? "" : "s"} due today: ${dueRules.map((rule) => rule.memberName).join(", ")}.`;
    }

    memberSelect.addEventListener("change", refreshMessage);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const member = selectedMember();
      const timingLabel = timingSelect.options[timingSelect.selectedIndex].text;
      saveRule({
        memberId: member.id,
        memberName: member.name,
        phone: member.phone,
        birthday: member.birthday,
        channel: channelSelect.value,
        daysBefore: Number(timingSelect.value),
        timingLabel,
        message: messageInput.value.trim()
      });
      resetForm(form);
      populateMemberSelect(memberSelect);
      refreshMessage();
    });

    dueCheckButton.addEventListener("click", checkDueToday);
    refreshMessage();
    renderReminderRules();
  }

  function setupAssets() {
    const form = qs("#assetForm");
    if (!form) return;

    const memberSelect = qs("#assetMember");
    const table = qs("#assetTable");
    const exportButton = qs("#exportAssets");
    populateMemberSelect(memberSelect);

    function readAssets() {
      return readJson("tmtAssetDeclarations", []);
    }

    function writeAssets(records) {
      writeJson("tmtAssetDeclarations", records);
    }

    function renderAssets() {
      const records = readAssets();
      if (!records.length) {
        table.innerHTML = '<tr><td colspan="5" class="empty-cell">No asset declarations saved yet.</td></tr>';
        return;
      }

      table.innerHTML = records.map((record) => `
        <tr>
          <td data-label="Member">${escapeHtml(record.memberName)}</td>
          <td data-label="Type">${escapeHtml(record.type)}</td>
          <td data-label="Asset">${escapeHtml(record.name)}</td>
          <td data-label="Value">${record.value ? `$${escapeHtml(record.value)}` : "Not set"}</td>
          <td data-label="Notes">${escapeHtml(record.notes || "None")}</td>
        </tr>
      `).join("");
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const member = members.find((item) => item.id === memberSelect.value) || members[0];
      const record = {
        memberName: member.name,
        type: qs("#assetType").value,
        name: qs("#assetName").value.trim(),
        value: qs("#assetValue").value,
        notes: qs("#assetNotes").value.trim(),
        createdAt: new Date().toISOString()
      };
      const records = readAssets();
      records.unshift(record);
      writeAssets(records);
      resetForm(form);
      populateMemberSelect(memberSelect);
      renderAssets();
    });

    exportButton.addEventListener("click", () => {
      const data = JSON.stringify(readAssets(), null, 2);
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "temple-asset-declarations.json";
      link.click();
      URL.revokeObjectURL(url);
    });

    renderAssets();
  }

  function setupFestiveCalendar() {
    const grid = qs("#eventGrid");
    if (!grid) return;

    const search = qs("#eventSearch");
    const filter = qs("#eventTypeFilter");

    function renderEvents() {
      const term = (search.value || "").trim().toLowerCase();
      const type = filter.value;
      const events = readManaged("events")
        .filter((event) => {
          const haystack = `${event.name} ${event.date} ${event.time} ${event.type} ${event.details}`.toLowerCase();
          return (!term || haystack.includes(term)) && (type === "all" || event.type === type);
        })
        .sort((first, second) => first.date.localeCompare(second.date));

      if (!events.length) {
        grid.innerHTML = '<p class="empty-state">No festive calendar events match this view.</p>';
        return;
      }

      grid.innerHTML = events.map((event) => `
        <article class="event-card">
          <div class="event-date">
            <span>${escapeHtml(new Date(`${event.date}T00:00:00`).toLocaleDateString("en-US", { month: "short" }))}</span>
            <strong>${escapeHtml(new Date(`${event.date}T00:00:00`).toLocaleDateString("en-US", { day: "2-digit" }))}</strong>
          </div>
          <div class="event-content">
            <p class="eyebrow">${escapeHtml(event.type)} / ${escapeHtml(event.time || "Time to be confirmed")}</p>
            <h2>${escapeHtml(event.name)}</h2>
            <p>${escapeHtml(event.details)}</p>
            <small>${formatEventDate(event.date)}</small>
          </div>
        </article>
      `).join("");
    }

    search.addEventListener("input", renderEvents);
    filter.addEventListener("change", renderEvents);
    renderEvents();
  }

  function renderAdminList(kind, container, titleField, metaBuilder) {
    const records = readManaged(kind);
    if (!records.length) {
      container.innerHTML = '<p class="empty-state">No records added yet.</p>';
      return;
    }

    container.innerHTML = records.map((record) => `
      <article class="admin-record">
        <div>
          <h3>${escapeHtml(record[titleField])}</h3>
          <p>${escapeHtml(metaBuilder(record))}</p>
        </div>
        <div class="admin-actions">
          <button class="button secondary" type="button" data-admin-edit="${kind}" data-admin-id="${escapeHtml(record.id)}">Edit</button>
          <button class="button danger" type="button" data-admin-delete="${kind}" data-admin-id="${escapeHtml(record.id)}">Delete</button>
        </div>
      </article>
    `).join("");
  }

  function setupAdminPage() {
    if (document.body.dataset.page !== "admin") return;

    const forms = {
      events: qs("#adminEventForm"),
      highlights: qs("#adminHighlightForm"),
      schedule: qs("#adminScheduleForm"),
      artis: qs("#adminArtiForm"),
      poojas: qs("#adminPoojaForm")
    };

    const lists = {
      events: qs("#adminEventList"),
      highlights: qs("#adminHighlightList"),
      schedule: qs("#adminScheduleList"),
      artis: qs("#adminArtiList"),
      poojas: qs("#adminPoojaList")
    };

    function renderAll() {
      renderAdminList("events", lists.events, "name", (item) => `${formatEventDate(item.date)} / ${item.time || "Time to be confirmed"} / ${item.type} / ${item.details}`);
      renderAdminList("highlights", lists.highlights, "label", (item) => `${item.value} / ${item.description}`);
      renderAdminList("schedule", lists.schedule, "activity", (item) => `${item.time} / ${item.details}`);
      renderAdminList("artis", lists.artis, "name", (item) => item.description);
      renderAdminList("poojas", lists.poojas, "name", (item) => item.description);
    }

    forms.events.addEventListener("submit", (event) => {
      event.preventDefault();
      saveManaged("events", {
        id: qs("#adminEventId").value,
        name: qs("#adminEventName").value.trim(),
        date: qs("#adminEventDate").value,
        time: qs("#adminEventTime").value.trim(),
        type: qs("#adminEventType").value,
        details: qs("#adminEventDetails").value.trim()
      });
      resetForm(forms.events);
      renderAll();
    });

    forms.highlights.addEventListener("submit", (event) => {
      event.preventDefault();
      saveManaged("highlights", {
        id: qs("#adminHighlightId").value,
        label: qs("#adminHighlightLabel").value.trim(),
        value: qs("#adminHighlightValue").value.trim(),
        description: qs("#adminHighlightDescription").value.trim()
      });
      resetForm(forms.highlights);
      renderAll();
    });

    forms.schedule.addEventListener("submit", (event) => {
      event.preventDefault();
      saveManaged("schedule", {
        id: qs("#adminScheduleId").value,
        time: qs("#adminScheduleTime").value.trim(),
        activity: qs("#adminScheduleActivity").value.trim(),
        details: qs("#adminScheduleDetails").value.trim()
      });
      resetForm(forms.schedule);
      renderAll();
    });

    forms.artis.addEventListener("submit", (event) => {
      event.preventDefault();
      saveManaged("artis", {
        id: qs("#adminArtiId").value,
        name: qs("#adminArtiName").value.trim(),
        description: qs("#adminArtiDescription").value.trim()
      });
      resetForm(forms.artis);
      renderAll();
    });

    forms.poojas.addEventListener("submit", (event) => {
      event.preventDefault();
      saveManaged("poojas", {
        id: qs("#adminPoojaId").value,
        name: qs("#adminPoojaName").value.trim(),
        description: qs("#adminPoojaDescription").value.trim()
      });
      resetForm(forms.poojas);
      renderAll();
    });

    qsa("[id^='reset']").forEach((button) => {
      button.addEventListener("click", () => resetForm(button.closest("form")));
    });

    Object.values(lists).forEach((list) => {
      list.addEventListener("click", (event) => {
        const editButton = event.target.closest("[data-admin-edit]");
        const deleteButton = event.target.closest("[data-admin-delete]");

        if (deleteButton) {
          deleteManaged(deleteButton.dataset.adminDelete, deleteButton.dataset.adminId);
          renderAll();
          return;
        }

        if (!editButton) return;

        const kind = editButton.dataset.adminEdit;
        const record = readManaged(kind).find((item) => item.id === editButton.dataset.adminId);
        if (!record) return;

        if (kind === "events") {
          qs("#adminEventId").value = record.id;
          qs("#adminEventName").value = record.name;
          qs("#adminEventDate").value = record.date;
          qs("#adminEventTime").value = record.time || "";
          qs("#adminEventType").value = record.type;
          qs("#adminEventDetails").value = record.details;
          forms.events.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        if (kind === "highlights") {
          qs("#adminHighlightId").value = record.id;
          qs("#adminHighlightLabel").value = record.label;
          qs("#adminHighlightValue").value = record.value;
          qs("#adminHighlightDescription").value = record.description;
          forms.highlights.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        if (kind === "schedule") {
          qs("#adminScheduleId").value = record.id;
          qs("#adminScheduleTime").value = record.time;
          qs("#adminScheduleActivity").value = record.activity;
          qs("#adminScheduleDetails").value = record.details;
          forms.schedule.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        if (kind === "artis") {
          qs("#adminArtiId").value = record.id;
          qs("#adminArtiName").value = record.name;
          qs("#adminArtiDescription").value = record.description;
          forms.artis.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        if (kind === "poojas") {
          qs("#adminPoojaId").value = record.id;
          qs("#adminPoojaName").value = record.name;
          qs("#adminPoojaDescription").value = record.description;
          forms.poojas.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    renderAll();
  }

  function initializePageFeatures() {
    renderMembers();
    renderVahanas();
    renderDarshanPage();
    setupReminders();
    setupAssets();
    setupFestiveCalendar();
    setupAdminPage();
  }

  setActiveNav();
  setupNavigation();
  if (requirePrivateAccess(initializePageFeatures)) {
    initializePageFeatures();
  }
})();

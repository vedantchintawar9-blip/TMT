(function () {
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

  const defaultReminderMessage =
    "Namaste {name}, this is a reminder for your birthday vastra pujan at Tirumala Temple. Please contact the temple office for offering details. Govinda Govinda.";

  const PRIVATE_PASSCODE = "temple2026";

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
        <p>Enter the temple admin passcode to view reminders and asset records.</p>
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
    const filter = qs("#memberFilter");

    function draw() {
      const term = (search.value || "").trim().toLowerCase();
      const status = filter.value;
      const filtered = members.filter((member) => {
        const haystack = `${member.name} ${member.role} ${member.city} ${member.family}`.toLowerCase();
        const matchesSearch = !term || haystack.includes(term);
        const matchesStatus =
          status === "all" ||
          (status === "enabled" && member.reminder && member.phone) ||
          (status === "missing" && !member.phone);
        return matchesSearch && matchesStatus;
      });

      grid.innerHTML = filtered.map((member) => `
        <article class="member-card">
          <div class="avatar" aria-label="Photo placeholder for ${escapeHtml(member.name)}">${escapeHtml(member.initials)}</div>
          <div>
            <div class="member-card-head">
              <h2>${escapeHtml(member.name)}</h2>
              <span class="status-pill ${member.phone ? "ready" : "warning"}">${member.phone ? "Contact ready" : "Needs phone"}</span>
            </div>
            <p class="role">${escapeHtml(member.role)}</p>
            <dl class="detail-list">
              <div><dt>Family</dt><dd>${escapeHtml(member.family)}</dd></div>
              <div><dt>City</dt><dd>${escapeHtml(member.city)}</dd></div>
              <div><dt>Birthday</dt><dd>${formatBirthday(member.birthday)}</dd></div>
              <div><dt>Phone</dt><dd>${member.phone ? escapeHtml(member.phone) : "Not added"}</dd></div>
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
    filter.addEventListener("change", draw);
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
      return JSON.parse(localStorage.getItem("tmtAnnualReminderRules") || "[]");
    }

    function writeRules(rules) {
      localStorage.setItem("tmtAnnualReminderRules", JSON.stringify(rules));
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
        message: messageInput.value.trim(),
      });
      form.reset();
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
      return JSON.parse(localStorage.getItem("tmtAssetDeclarations") || "[]");
    }

    function writeAssets(records) {
      localStorage.setItem("tmtAssetDeclarations", JSON.stringify(records));
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
      form.reset();
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
    const unlockForm = qs("#calendarAdminUnlock");
    const passcodeInput = qs("#calendarPasscode");
    const adminError = qs("#calendarAdminError");
    const eventForm = qs("#eventForm");
    let isAdmin = sessionStorage.getItem("tmtCalendarAdminUnlocked") === "true";

    function readCustomEvents() {
      return JSON.parse(localStorage.getItem("tmtFestiveCalendarEvents") || "[]");
    }

    function writeCustomEvents(events) {
      localStorage.setItem("tmtFestiveCalendarEvents", JSON.stringify(events));
    }

    function readDeletedDefaultIds() {
      return JSON.parse(localStorage.getItem("tmtDeletedDefaultEventIds") || "[]");
    }

    function writeDeletedDefaultIds(ids) {
      localStorage.setItem("tmtDeletedDefaultEventIds", JSON.stringify(ids));
    }

    function allEvents() {
      const deleted = new Set(readDeletedDefaultIds());
      return [
        ...defaultEvents.filter((event) => !deleted.has(event.id)),
        ...readCustomEvents()
      ].sort((first, second) => first.date.localeCompare(second.date));
    }

    function deleteEvent(eventId, source) {
      if (source === "default") {
        const deleted = new Set(readDeletedDefaultIds());
        deleted.add(eventId);
        writeDeletedDefaultIds(Array.from(deleted));
      } else {
        writeCustomEvents(readCustomEvents().filter((event) => event.id !== eventId));
      }
      renderEvents();
    }

    function renderEvents() {
      const term = (search.value || "").trim().toLowerCase();
      const type = filter.value;
      const events = allEvents().filter((event) => {
        const haystack = `${event.name} ${event.date} ${event.time} ${event.type} ${event.details}`.toLowerCase();
        return (!term || haystack.includes(term)) && (type === "all" || event.type === type);
      });

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
          ${isAdmin ? `<button class="button danger" type="button" data-delete-event="${escapeHtml(event.id)}" data-event-source="${escapeHtml(event.source || "custom")}">Delete</button>` : ""}
        </article>
      `).join("");

      qsa("[data-delete-event]", grid).forEach((button) => {
        button.addEventListener("click", () => {
          deleteEvent(button.dataset.deleteEvent, button.dataset.eventSource);
        });
      });
    }

    function setAdminState(unlocked) {
      isAdmin = unlocked;
      sessionStorage.setItem("tmtCalendarAdminUnlocked", String(unlocked));
      eventForm.classList.toggle("is-hidden", !unlocked);
      unlockForm.classList.toggle("is-hidden", unlocked);
      renderEvents();
    }

    unlockForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (passcodeInput.value === PRIVATE_PASSCODE) {
        adminError.textContent = "";
        setAdminState(true);
        return;
      }
      adminError.textContent = "Incorrect passcode.";
    });

    eventForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const record = {
        id: `evt-${Date.now()}`,
        name: qs("#eventName").value.trim(),
        date: qs("#eventDate").value,
        time: qs("#eventTime").value.trim(),
        type: qs("#eventType").value,
        details: qs("#eventDetails").value.trim(),
        source: "custom"
      };
      writeCustomEvents([...readCustomEvents(), record]);
      eventForm.reset();
      renderEvents();
    });

    search.addEventListener("input", renderEvents);
    filter.addEventListener("change", renderEvents);
    setAdminState(isAdmin);
  }

  function initializePageFeatures() {
    renderMembers();
    renderVahanas();
    setupReminders();
    setupAssets();
    setupFestiveCalendar();
  }

  setActiveNav();
  setupNavigation();
  if (requirePrivateAccess(initializePageFeatures)) {
    initializePageFeatures();
  }
})();

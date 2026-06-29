const previews = {
  portal: () => (
    <div className="preview preview--portal">
      <div className="preview__toolbar">
        <span className="preview__dot preview__dot--red" />
        <span className="preview__dot preview__dot--yellow" />
        <span className="preview__dot preview__dot--green" />
        <span className="preview__url">portal.client-api.io/dashboard</span>
      </div>
      <div className="preview__body preview__body--split">
        <aside className="preview-sidebar">
          <div className="preview-sidebar__item preview-sidebar__item--active">Overview</div>
          <div className="preview-sidebar__item">API Services</div>
          <div className="preview-sidebar__item">Integrations</div>
          <div className="preview-sidebar__item">Documents</div>
        </aside>
        <div className="preview-main">
          <div className="preview-stats">
            <div className="preview-stat">
              <span className="preview-stat__value">99.9%</span>
              <span className="preview-stat__label">Uptime</span>
            </div>
            <div className="preview-stat">
              <span className="preview-stat__value">12</span>
              <span className="preview-stat__label">Services</span>
            </div>
            <div className="preview-stat">
              <span className="preview-stat__value">120ms</span>
              <span className="preview-stat__label">Avg Response</span>
            </div>
          </div>
          <div className="preview-table">
            <div className="preview-table__row preview-table__row--head">
              <span>Service</span>
              <span>Status</span>
              <span>Requests/min</span>
            </div>
            <div className="preview-table__row">
              <span>Auth API</span>
              <span className="preview-badge preview-badge--green">Healthy</span>
              <span>842</span>
            </div>
            <div className="preview-table__row">
              <span>Document API</span>
              <span className="preview-badge preview-badge--green">Healthy</span>
              <span>1,204</span>
            </div>
            <div className="preview-table__row">
              <span>Integration Hub</span>
              <span className="preview-badge preview-badge--green">Healthy</span>
              <span>567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  "ai-workflow": () => (
    <div className="preview preview--ai">
      <div className="preview__toolbar">
        <span className="preview__dot preview__dot--red" />
        <span className="preview__dot preview__dot--yellow" />
        <span className="preview__dot preview__dot--green" />
        <span className="preview__url">workflow.ai-engine.io/pipeline</span>
      </div>
      <div className="preview__body">
        <div className="preview-pipeline">
          {[
            { step: "Document Intake", status: "done", count: "847" },
            { step: "AI Validation", status: "active", count: "812" },
            { step: "Classification", status: "pending", count: "—" },
            { step: "Route & Deliver", status: "pending", count: "—" },
          ].map((item, i) => (
            <div key={item.step} className="preview-pipeline__step">
              <div className={`preview-pipeline__node preview-pipeline__node--${item.status}`}>
                {item.status === "done" ? "✓" : i + 1}
              </div>
              <div className="preview-pipeline__info">
                <span className="preview-pipeline__name">{item.step}</span>
                <span className="preview-pipeline__count">{item.count} docs</span>
              </div>
              {i < 3 && <div className="preview-pipeline__line" />}
            </div>
          ))}
        </div>
        <div className="preview-ai-result">
          <span className="preview-ai-result__label">Latest classification</span>
          <div className="preview-ai-result__card">
            <span>invoice_Q4_2025.pdf</span>
            <span className="preview-badge preview-badge--blue">Invoice · 96.2% confidence</span>
          </div>
        </div>
      </div>
    </div>
  ),

  saas: () => (
    <div className="preview preview--saas">
      <div className="preview__toolbar">
        <span className="preview__dot preview__dot--red" />
        <span className="preview__dot preview__dot--yellow" />
        <span className="preview__dot preview__dot--green" />
        <span className="preview__url">admin.saas-platform.io/tenants</span>
      </div>
      <div className="preview__body">
        <div className="preview-table">
          <div className="preview-table__row preview-table__row--head">
            <span>Tenant</span>
            <span>Plan</span>
            <span>Users</span>
            <span>Status</span>
          </div>
          {[
            ["Acme Corp", "Enterprise", "124", "Active"],
            ["NovaTech", "Pro", "48", "Active"],
            ["BlueLine", "Pro", "31", "Active"],
            ["Summit LLC", "Starter", "8", "Provisioning"],
          ].map(([name, plan, users, status]) => (
            <div key={name} className="preview-table__row">
              <span>{name}</span>
              <span>{plan}</span>
              <span>{users}</span>
              <span
                className={`preview-badge ${
                  status === "Active" ? "preview-badge--green" : "preview-badge--yellow"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  dashboard: () => (
    <div className="preview preview--dashboard">
      <div className="preview__toolbar">
        <span className="preview__dot preview__dot--red" />
        <span className="preview__dot preview__dot--yellow" />
        <span className="preview__dot preview__dot--green" />
        <span className="preview__url">ops.live-dashboard.io</span>
        <span className="preview__live">● LIVE</span>
      </div>
      <div className="preview__body">
        <div className="preview-stats">
          <div className="preview-stat">
            <span className="preview-stat__value">$48.2K</span>
            <span className="preview-stat__label">Revenue Today</span>
          </div>
          <div className="preview-stat">
            <span className="preview-stat__value">1,847</span>
            <span className="preview-stat__label">Active Orders</span>
          </div>
          <div className="preview-stat">
            <span className="preview-stat__value">98.4%</span>
            <span className="preview-stat__label">Fulfillment</span>
          </div>
        </div>
        <div className="preview-chart">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
            <div key={i} className="preview-chart__bar" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  ),

  healthcare: () => (
    <div className="preview preview--healthcare">
      <div className="preview__toolbar">
        <span className="preview__dot preview__dot--red" />
        <span className="preview__dot preview__dot--yellow" />
        <span className="preview__dot preview__dot--green" />
        <span className="preview__url">care.tateeda-health.io/patients</span>
      </div>
      <div className="preview__body">
        <div className="preview-table">
          <div className="preview-table__row preview-table__row--head">
            <span>Patient ID</span>
            <span>Care Plan</span>
            <span>Last Visit</span>
            <span>Status</span>
          </div>
          {[
            ["PT-10482", "Diabetes Mgmt", "Jun 24", "Active"],
            ["PT-10491", "Post-Op Recovery", "Jun 26", "Active"],
            ["PT-10503", "Cardiac Care", "Jun 25", "Review"],
            ["PT-10517", "Preventive", "Jun 27", "Active"],
          ].map(([id, plan, visit, status]) => (
            <div key={id} className="preview-table__row">
              <span>{id}</span>
              <span>{plan}</span>
              <span>{visit}</span>
              <span
                className={`preview-badge ${
                  status === "Active" ? "preview-badge--green" : "preview-badge--yellow"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
        <div className="preview-hipaa">🔒 HIPAA-compliant · All access logged</div>
      </div>
    </div>
  ),

  integration: () => (
    <div className="preview preview--integration">
      <div className="preview__toolbar">
        <span className="preview__dot preview__dot--red" />
        <span className="preview__dot preview__dot--yellow" />
        <span className="preview__dot preview__dot--green" />
        <span className="preview__url">hub.tateeda-health.io/sync</span>
      </div>
      <div className="preview__body">
        {[
          { name: "Epic EHR", synced: "1,204 records", status: "Synced" },
          { name: "Billing Provider", synced: "892 records", status: "Synced" },
          { name: "Lab Data Feed", synced: "347 records", status: "Syncing" },
        ].map((sys) => (
          <div key={sys.name} className="preview-sync">
            <div className="preview-sync__header">
              <span>{sys.name}</span>
              <span
                className={`preview-badge ${
                  sys.status === "Synced" ? "preview-badge--green" : "preview-badge--blue"
                }`}
              >
                {sys.status}
              </span>
            </div>
            <div className="preview-sync__bar">
              <div
                className="preview-sync__fill"
                style={{ width: sys.status === "Synced" ? "100%" : "67%" }}
              />
            </div>
            <span className="preview-sync__count">{sys.synced} today</span>
          </div>
        ))}
      </div>
    </div>
  ),

  analytics: () => (
    <div className="preview preview--analytics">
      <div className="preview__toolbar">
        <span className="preview__dot preview__dot--red" />
        <span className="preview__dot preview__dot--yellow" />
        <span className="preview__dot preview__dot--green" />
        <span className="preview__url">analytics.forecast.io/predictions</span>
      </div>
      <div className="preview__body">
        <div className="preview-stats">
          <div className="preview-stat">
            <span className="preview-stat__value">91%</span>
            <span className="preview-stat__label">Forecast Accuracy</span>
          </div>
          <div className="preview-stat">
            <span className="preview-stat__value">-34%</span>
            <span className="preview-stat__label">Overstock</span>
          </div>
        </div>
        <div className="preview-forecast">
          <div className="preview-forecast__legend">
            <span><i className="preview-forecast__dot preview-forecast__dot--actual" /> Actual</span>
            <span><i className="preview-forecast__dot preview-forecast__dot--predicted" /> Predicted</span>
          </div>
          <svg viewBox="0 0 300 80" className="preview-forecast__svg">
            <polyline
              fill="none"
              stroke="rgba(20,184,166,0.5)"
              strokeWidth="2"
              points="0,60 50,55 100,45 150,50 200,35 250,40 300,25"
            />
            <polyline
              fill="none"
              stroke="#14b8a6"
              strokeWidth="2"
              strokeDasharray="4 3"
              points="150,50 200,30 250,35 300,20"
            />
          </svg>
        </div>
      </div>
    </div>
  ),

  classification: () => (
    <div className="preview preview--classification">
      <div className="preview__toolbar">
        <span className="preview__dot preview__dot--red" />
        <span className="preview__dot preview__dot--yellow" />
        <span className="preview__dot preview__dot--green" />
        <span className="preview__url">docs.ai-classifier.io/results</span>
      </div>
      <div className="preview__body">
        {[
          { file: "contract_2024_v3.pdf", type: "Legal", confidence: "97.1%" },
          { file: "invoice_march.pdf", type: "Invoice", confidence: "94.5%" },
          { file: "employee_form.docx", type: "HR", confidence: "92.8%" },
          { file: "report_Q1.xlsx", type: "Financial", confidence: "96.3%" },
        ].map((doc) => (
          <div key={doc.file} className="preview-doc">
            <span className="preview-doc__icon">📄</span>
            <div className="preview-doc__info">
              <span className="preview-doc__name">{doc.file}</span>
              <span className="preview-doc__meta">
                {doc.type} · {doc.confidence} confidence
              </span>
            </div>
            <span className="preview-badge preview-badge--green">Routed</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export default function ProjectPreview({ type }) {
  const render = previews[type];
  if (!render) {
    return <div className="preview preview--fallback">Preview not available</div>;
  }
  return render();
}

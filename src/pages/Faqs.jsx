import { memo, useState, useEffect } from 'react';
import { FAQS, FAQ_CATEGORIES } from '../data/faqsData.js';
import './Faqs.css';

function Faqs() {
  const [openFaq, setOpenFaq] = useState(0);
  const [faqQuery, setFaqQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedAll, setExpandedAll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Frequently Asked Questions | Urology & AALBEC Therapy';
  }, []);

  const filteredFaqs = FAQS.filter((f) => {
    const query = faqQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      f.q.toLowerCase().includes(query) ||
      f.a.toLowerCase().includes(query) ||
      String(f.num).includes(query);
    const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  const handleToggleAll = () => {
    if (expandedAll) {
      setExpandedAll(false);
      setOpenFaq(-1);
    } else {
      setExpandedAll(true);
      setOpenFaq('ALL');
    }
  };

  return (
    <div className="faqs-page">
      {/* Header Banner */}
      <section className="faqs-hero">
        <div className="container">
          <div className="faqs-hero__inner">
            <span className="faqs-badge">Verified Clinical Knowledge Base</span>
            <h1 className="faqs-hero__title">
              Frequently Asked <span>Questions</span>
            </h1>
            <p className="faqs-hero__lede">
              Explore 60 comprehensive answers covering bulbar urethral stricture causes, symptoms, surgical interventions, and advanced AALBEC autologous buccal epithelial cell therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="faqs-content">
        <div className="container">
          {/* Controls Bar: Search & Category Chips */}
          <div className="faqs-controls-card">
            {/* Search Input */}
            <div className="faqs-search-box">
              <span className="faqs-search-icon" aria-hidden="true">🔍</span>
              <input
                type="text"
                value={faqQuery}
                onChange={(e) => {
                  setFaqQuery(e.target.value);
                  setExpandedAll(false);
                }}
                placeholder="Search questions or answers (e.g. AALBEC, biopsy, laser, 64)..."
                aria-label="Search frequently asked questions"
                className="faqs-search-input"
              />
              {faqQuery && (
                <button
                  type="button"
                  className="faqs-clear-btn"
                  onClick={() => setFaqQuery('')}
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="faqs-pills-row">
              {FAQ_CATEGORIES.map((cat) => {
                const count = cat === 'All' ? FAQS.length : FAQS.filter((f) => f.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`faqs-pill ${selectedCategory === cat ? 'is-active' : ''}`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setOpenFaq(-1);
                      setExpandedAll(false);
                    }}
                  >
                    {cat} <span className="faqs-pill-count">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Metadata / Action Bar */}
            <div className="faqs-meta-bar">
              <span className="faqs-counter-text">
                Showing <strong>{filteredFaqs.length}</strong> of {FAQS.length} questions
                {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
              </span>
              <div className="faqs-actions-group">
                <button
                  type="button"
                  className="faqs-action-link"
                  onClick={handleToggleAll}
                >
                  {expandedAll ? 'Collapse All' : 'Expand All'}
                </button>
                {(faqQuery || selectedCategory !== 'All') && (
                  <button
                    type="button"
                    className="faqs-action-link faqs-action-link--reset"
                    onClick={() => {
                      setFaqQuery('');
                      setSelectedCategory('All');
                    }}
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Accordion Questions List */}
          <div className="faqs-list">
            {filteredFaqs.length === 0 && (
              <div className="faqs-empty-state">
                <div className="faqs-empty-icon" aria-hidden="true">🔎</div>
                <h3>No matching questions found</h3>
                <p>We couldn't find any questions matching "{faqQuery}".</p>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => {
                    setFaqQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  View All 60 Questions
                </button>
              </div>
            )}

            {filteredFaqs.map((f) => {
              const actualIndex = FAQS.indexOf(f);
              const isOpen = expandedAll || openFaq === actualIndex;
              const cleanQuestion = f.q.replace(/^\d+\.\s*/, '');

              return (
                <article key={f.q} className={`faq-card ${isOpen ? 'is-expanded' : ''}`}>
                  <button
                    type="button"
                    className="faq-card__header"
                    onClick={() => {
                      setExpandedAll(false);
                      setOpenFaq(isOpen ? -1 : actualIndex);
                    }}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-card__title-wrap">
                      <span className="faq-card__num-pill">Q{f.num}</span>
                      <span className="faq-card__question">{cleanQuestion}</span>
                    </span>
                    <span className="faq-card__toggle-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-card__body">
                      <div className="faq-card__answer" style={{ whiteSpace: 'pre-line' }}>
                        {f.a}
                      </div>
                      <div className="faq-card__footer">
                        <span className="faq-card__category-tag">Category: {f.category}</span>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default memo(Faqs);

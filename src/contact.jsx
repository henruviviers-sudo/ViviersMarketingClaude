/* global React */
const { useState: useStateC } = React;

function ContactPage({ navigate }) {
  const [form, setForm] = useStateC({name:'', email:'', service:'', budget:'', message:''});
  const [errors, setErrors] = useStateC({});
  const [submitting, setSubmitting] = useStateC(false);
  const [sent, setSent] = useStateC(false);

  const set = (k, v) => {
    setForm(f => ({...f, [k]: v}));
    if (errors[k]) setErrors(e => ({...e, [k]: null}));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'required';
    if (!form.email.trim()) errs.email = 'required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'check the format';
    if (!form.service) errs.service = 'pick one';
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = 'tell me a bit more';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSent(true); }, 1200);
  };

  return (
    <div className="page">
      <section className="contact-page">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-lead">
              <div className="section-lead"><span className="label">Contact · Open for April</span></div>
              <h1>Let's build <em>something.</em></h1>
              <p>Tell me what you're thinking. I'll reply within 24 hours — personally, not through a form-reply template.</p>
              <div className="contact-channels">
                <a className="channel" href="https://wa.me/27725290367">
                  <span className="channel-label">WhatsApp</span>
                  <span className="channel-value">+27 72 529 0367</span>
                  <span className="channel-arrow"><Arrow/></span>
                </a>
                <a className="channel" href="mailto:henruviviers@gmail.com">
                  <span className="channel-label">Email</span>
                  <span className="channel-value">henruviviers@gmail.com</span>
                  <span className="channel-arrow"><Arrow/></span>
                </a>
                <a className="channel">
                  <span className="channel-label">Location</span>
                  <span className="channel-value">Potchefstroom · ZA (GMT+2)</span>
                  <span className="channel-arrow">◇</span>
                </a>
                <a className="channel" href="https://www.etsy.com/shop/Foucheco" target="_blank">
                  <span className="channel-label">Etsy Shop</span>
                  <span className="channel-value">Foucheco — Digital Products</span>
                  <span className="channel-arrow"><Arrow/></span>
                </a>
              </div>
            </div>
            <div className="form-wrap">
              {sent ? (
                <div className="form-success">
                  <div className="form-success-icon">✓</div>
                  <h3>Message received.</h3>
                  <p>Thanks, {form.name.split(' ')[0]}. I'll reply to {form.email} within 24 hours.</p>
                  <button className="btn btn-ghost" style={{marginTop:24}} onClick={()=>{setSent(false); setForm({name:'',email:'',service:'',budget:'',message:''});}}>
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="form-head">
                    <h3>Project brief</h3>
                    <span className="status">◇ Avg reply · 6h</span>
                  </div>
                  <div className={`form-field ${errors.name?'error':''}`}>
                    <label>Your name</label>
                    <input type="text" placeholder="Jane Doe" value={form.name} onChange={e=>set('name', e.target.value)}/>
                    {errors.name && <div className="error-msg">! {errors.name}</div>}
                  </div>
                  <div className={`form-field ${errors.email?'error':''}`}>
                    <label>Email</label>
                    <input type="email" placeholder="you@company.com" value={form.email} onChange={e=>set('email', e.target.value)}/>
                    {errors.email && <div className="error-msg">! {errors.email}</div>}
                  </div>
                  <div className="form-row">
                    <div className={`form-field ${errors.service?'error':''}`}>
                      <label>Service</label>
                      <select value={form.service} onChange={e=>set('service', e.target.value)}>
                        <option value="">— pick one —</option>
                        <option>Website Design</option>
                        <option>AI Automation</option>
                        <option>Digital Products</option>
                        <option>Not sure yet</option>
                      </select>
                      {errors.service && <div className="error-msg">! {errors.service}</div>}
                    </div>
                    <div className="form-field">
                      <label>Budget (optional)</label>
                      <select value={form.budget} onChange={e=>set('budget', e.target.value)}>
                        <option value="">— select —</option>
                        <option>Under R10k</option>
                        <option>R10k – R25k</option>
                        <option>R25k – R50k</option>
                        <option>R50k+</option>
                      </select>
                    </div>
                  </div>
                  <div className={`form-field ${errors.message?'error':''}`}>
                    <label>What are you building?</label>
                    <textarea rows="4" placeholder="A lodge site with a booking form, or a WhatsApp bot that handles enquiries, or…" value={form.message} onChange={e=>set('message', e.target.value)}/>
                    {errors.message && <div className="error-msg">! {errors.message}</div>}
                  </div>
                  <button className="form-submit" type="submit" disabled={submitting}>
                    {submitting ? 'Sending…' : <>Send brief <Arrow/></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer navigate={navigate}/>
    </div>
  );
}
Object.assign(window, { ContactPage });

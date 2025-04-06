export const footerTemplate = `
    <footer class="site-footer">
        <div class="footer-grid container">
            <div class="footer-section">
                <h3>Contact Us</h3>
                <address>
                    <p><strong>Email:</strong> <a href="mailto:info@gjengeearth.org">info@gjengeearth.org</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+254000000000">+254 XXX XXX XXX</a></p>
                    <p><strong>Location:</strong> Nairobi, Kenya</p>
                </address>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="our-work.html">Our Work</a></li>
                    <li><a href="donate.html">Support Us</a></li>
                    <li><a href="contact.html">Get in Touch</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-links">
                    <a href="#" aria-label="Facebook">FB</a>
                    <a href="#" aria-label="Twitter">TW</a>
                    <a href="#" aria-label="Instagram">IG</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>&copy; 2025 Gjenge Earth Foundation. All rights reserved.</p>
                </div>
        </div>
    </footer>
`;

export function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerTemplate;
    }
}
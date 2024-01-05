import Link from "next/link";
import styles from "./style.module.scss";

const ContactPage = () => {
  return (
    <section id={styles.contact}>
      <div className="container">
        <div className={styles.contact_row}>
          <div className={styles.contact_row_side}>
            <h1>Send a Message</h1>
            <br />
            <form>
              <div className={styles.input_data}>
                <input type="text" name="fullName" required />
                <div className={styles.underline}></div>
                <label>Full Name</label>
              </div>
              <div className={styles.input_data}>
                <input type="text" name="email" required />
                <div className={styles.underline}></div>
                <label>Email</label>
              </div>
              <div className={styles.input_data}>
                <input type="message" name="message" required />
                <div className={styles.underline}></div>
                <label>Message</label>
              </div>
              <div className={styles.form_button_div}>
                <button className={styles.form_button}>
                  Send
                  <div className={styles.icon}>
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
          <div className={styles.contact_row_side}>
            <h1>Contact Info</h1>
            <br />
            <div className={styles.contact_info}>
              <Link href={"#"}>
                <i class="fa-solid fa-phone"></i> +998 90 447 75 15
              </Link>
              <Link href={"#"}>
                <i class="fa-solid fa-envelope"></i> assavlatbek@gmail.com
              </Link>
            </div>
            <br />
            <h1>Social Networks</h1>
            <br />
            <div className={styles.contact_socials}>
              <Link href={"#"}>
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link href={"#"}>
                <i class="fa-brands fa-telegram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

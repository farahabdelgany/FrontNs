import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent9 from "../components/FrameComponent9";
import styles from "./AccountPrivacy.module.css";

const AccountPrivacy = () => {
  const navigate = useNavigate();

  const onProfileAccountContainerClick = useCallback(() => {
    navigate("/homeprofile");
  }, [navigate]);

  return (
    <div className={styles.accountPrivacy}>
      <img className={styles.bgVectorIcon} alt="" src="/bg-vector.svg" />
      <main className={styles.dashboard}>
        <div className={styles.sideBar}>
          <div className={styles.sideMenu}>
            <div className={styles.sideMenu1}>
              <div className={styles.homeMenu}>
                <img
                  className={styles.heroiconsMinihome}
                  loading="lazy"
                  alt=""
                  src="/heroiconsminihome.svg"
                />
                <h3 className={styles.home}>Home</h3>
              </div>
              <div className={styles.myShelfMenu}>
                <img
                  className={styles.bookshelfIcon}
                  loading="lazy"
                  alt=""
                  src="/bookshelf.svg"
                />
                <h3 className={styles.dashboard1}>Dashboard</h3>
              </div>
              <div className={styles.searchMenu}>
                <img
                  className={styles.searchIcon}
                  loading="lazy"
                  alt=""
                  src="/search-1.svg"
                />
                <h3 className={styles.search}>Search</h3>
              </div>
              <div className={styles.favouriteMenu}>
                <img
                  className={styles.giveGiftIcon}
                  alt=""
                  src="/give-gift.svg"
                />
                <div className={styles.contribute}>Contribute</div>
              </div>
            </div>
          </div>
          <div className={styles.sideBarInner}>
            <div className={styles.aboutParent}>
              <div className={styles.about}>{`About `}</div>
              <div className={styles.support}>Support</div>
              <div className={styles.termsCondition}>{`Terms & Condition`}</div>
            </div>
          </div>
        </div>
        <div className={styles.shelfParent}>
          <h1 className={styles.shelf}>Shelf</h1>
          <h1 className={styles.smart}>Smart</h1>
        </div>
        <b className={styles.bookList}>Book list</b>
        <header className={styles.quickSearchBarParent}>
          <div className={styles.quickSearchBar}>
            <div className={styles.quickSearchBarChild} />
            <div className={styles.frameParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.all}>All</div>
                <div className={styles.polygonWrapper}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/code-testing.svg"
                  />
                </div>
              </div>
              <div className={styles.searchWrapper}>
                <h3 className={styles.search1}>Search</h3>
              </div>
            </div>
            <div className={styles.quickSearchBarInner}>
              <div className={styles.frameGroup}>
                <div className={styles.searchContainer}>
                  <img
                    className={styles.searchIcon1}
                    alt=""
                    src="/search.svg"
                  />
                </div>
                <div className={styles.frameInner} />
                <div className={styles.barcodeScannerWrapper}>
                  <img
                    className={styles.barcodeScannerIcon}
                    loading="lazy"
                    alt=""
                    src="/barcode-scanner.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className={styles.lang}>
            <div className={styles.langChild} />
            <div className={styles.translateWrapper}>
              <img
                className={styles.translateIcon}
                alt=""
                src="/translate.svg"
              />
            </div>
            <div className={styles.langWrapper}>
              <div className={styles.lang1}>Lang</div>
            </div>
            <div className={styles.langInner}>
              <img
                className={styles.polygonIcon}
                alt=""
                src="/code-testing.svg"
              />
            </div>
          </button>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.timeParent}>
              <img
                className={styles.timeIcon}
                loading="lazy"
                alt=""
                src="/time.svg"
              />
              <div className={styles.am}>09:00 AM</div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/import-export-manager.svg"
              />
              <div className={styles.mar2023}>4-Mar-2023</div>
            </div>
          </div>
          <div
            className={styles.profileAccount}
            onClick={onProfileAccountContainerClick}
          >
            <div className={styles.profileAccountChild} />
            <div className={styles.profileAccountInner}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-10@2x.png"
              />
            </div>
            <div className={styles.kensonWrapper}>
              <div className={styles.kenson}>Kenson</div>
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameChild1}
                alt=""
                src="/code-testing.svg"
              />
            </div>
          </div>
        </header>
        <section className={styles.setting}>
          <div className={styles.profileParent}>
            <div className={styles.profile}>
              <div className={styles.frameContainer}>
                <div className={styles.iconuserWrapper}>
                  <img className={styles.iconuser} alt="" src="/iconuser.svg" />
                </div>
                <div className={styles.profile1}>Profile</div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.icondocumentWrapper}>
                  <img
                    className={styles.icondocument}
                    alt=""
                    src="/icondocument.svg"
                  />
                </div>
                <div className={styles.basicInformation}>Basic information</div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.iconlockWrapper}>
                  <img className={styles.iconlock} alt="" src="/iconlock.svg" />
                </div>
                <div className={styles.changePassword}>Change password</div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.iconsecurityWrapper}>
                  <img
                    className={styles.iconsecurity}
                    alt=""
                    src="/iconsecurity.svg"
                  />
                </div>
                <div className={styles.fVerification}>2F verification</div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.iconaccountWrapper}>
                  <img
                    className={styles.iconaccount}
                    alt=""
                    src="/iconaccount.svg"
                  />
                </div>
                <div className={styles.acccount}>Acccount</div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.iconnotificationWrapper}>
                  <img
                    className={styles.iconnotification}
                    alt=""
                    src="/iconnotification.svg"
                  />
                </div>
                <div className={styles.notification}>Notification</div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.icondeleteWrapper}>
                  <img
                    className={styles.icondelete}
                    alt=""
                    src="/icondelete.svg"
                  />
                </div>
                <div className={styles.deleteAccount}>Delete account</div>
              </div>
            </div>
            <div className={styles.profileGroup}>
              <div className={styles.profile2}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.frameChild2}
                    loading="lazy"
                    alt=""
                    src="/ellipse-1840@2x.png"
                  />
                  <div className={styles.frameWrapper}>
                    <div className={styles.aidenMaxParent}>
                      <b className={styles.aidenMax}>Aiden Max</b>
                      <div className={styles.ceoCoFounder}>
                        CEO / Co-Founder
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.profileInner}>
                  <div className={styles.switchToInvisibleParent}>
                    <div className={styles.switchToInvisibleContainer}>
                      <p className={styles.switchTo}>Switch to</p>
                      <p className={styles.invisible}>invisible</p>
                    </div>
                    <div className={styles.iconoffWrapper}>
                      <img
                        className={styles.iconoff}
                        loading="lazy"
                        alt=""
                        src="/iconoff.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.basicInformation1}>
                <div className={styles.basicInformation2}>
                  Basic Information
                </div>
                <form className={styles.frameForm}>
                  <div className={styles.textfield2Parent}>
                    <div className={styles.textfield2}>
                      <div className={styles.password}>First Name</div>
                      <div className={styles.textParent}>
                        <input
                          className={styles.text}
                          placeholder="Aiden"
                          type="text"
                        />
                        <div className={styles.iconuserContainer}>
                          <img
                            className={styles.iconuser1}
                            alt=""
                            src="/iconuser-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.textfield3}>
                      <div className={styles.password1}>Last Name</div>
                      <div className={styles.textGroup}>
                        <input
                          className={styles.text1}
                          placeholder="Max"
                          type="text"
                        />
                        <div className={styles.iconuserFrame}>
                          <img
                            className={styles.iconuser2}
                            alt=""
                            src="/iconuser-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <FrameComponent9
                    password="Gendar"
                    text="Male"
                    icondown="/icondown.svg"
                    password1="Birthday"
                    textPlaceholder="5 june, 1995"
                    iconcalendar="/iconcalendar.svg"
                  />
                  <FrameComponent9
                    password="Email"
                    text="aiden123@gmail.com"
                    icondown="/iconemail.svg"
                    password1="Phone"
                    textPlaceholder="(44) 123 1234 254"
                    iconcalendar="/iconcall.svg"
                    propMinWidth="38px"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    propMinWidth2="44px"
                    propWidth="118px"
                  />
                  <div className={styles.textfield8Parent}>
                    <div className={styles.textfield8}>
                      <div className={styles.password2}>Department</div>
                      <div className={styles.textContainer}>
                        <input
                          className={styles.text2}
                          placeholder="Finance"
                          type="text"
                        />
                        <div className={styles.iconaccountContainer}>
                          <img
                            className={styles.iconaccount1}
                            alt=""
                            src="/iconaccount-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.textfield9Parent}>
                      <div className={styles.textfield9}>
                        <div className={styles.password3}>location</div>
                        <div className={styles.textParent1}>
                          <input
                            className={styles.text3}
                            placeholder="New york"
                            type="text"
                          />
                          <div className={styles.iconlocationWrapper}>
                            <img
                              className={styles.iconlocation}
                              alt=""
                              src="/iconlocation.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <button className={styles.buttonLarge}>
                        <div className={styles.button}>Save changes</div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.changePassword1}>
                <div className={styles.changePassword2}>Change Password</div>
                <div className={styles.textfield1}>
                  <div className={styles.text4}>Enter current password</div>
                  <div className={styles.iconkeyWrapper}>
                    <img className={styles.iconkey} alt="" src="/iconkey.svg" />
                  </div>
                </div>
                <div className={styles.textfield21}>
                  <div className={styles.text5}>Enter new password</div>
                  <div className={styles.iconkeyContainer}>
                    <img
                      className={styles.iconkey1}
                      alt=""
                      src="/iconkey.svg"
                    />
                  </div>
                </div>
                <div className={styles.textfield31}>
                  <div className={styles.text6}>Confirm new password</div>
                  <div className={styles.iconkeyFrame}>
                    <img
                      className={styles.iconkey2}
                      alt=""
                      src="/iconkey.svg"
                    />
                  </div>
                </div>
                <div className={styles.passwordRequirements}>
                  Password requirements
                </div>
                <div className={styles.pleaseFollowThisContainer}>
                  <p className={styles.pleaseFollowThis}>
                    Please follow this guide for a strong password
                  </p>
                  <ul className={styles.oneSpecialCharactersMin6C}>
                    <li className={styles.oneSpecialCharacters}>
                      One special characters
                    </li>
                    <li className={styles.min6Characters}>Min 6 characters</li>
                    <li className={styles.oneNumber2}>
                      One number (2 are recommended)
                    </li>
                    <li>Change it often</li>
                  </ul>
                </div>
                <div className={styles.inputConnection}>
                  <button className={styles.buttonLarge1}>
                    <div className={styles.button1}>Update password</div>
                  </button>
                </div>
              </div>
              <div className={styles.authentication}>
                <div className={styles.twoFactorAuthenticationParent}>
                  <div className={styles.twoFactorAuthentication}>
                    Two factor authentication
                  </div>
                  <div className={styles.securityKeyParent}>
                    <div className={styles.securityKey}>Security Key</div>
                    <div className={styles.currentlyNoSecurity}>
                      Currently no security key set
                    </div>
                  </div>
                  <div className={styles.smsNumberParent}>
                    <div className={styles.smsNumber}>SMS number</div>
                    <div className={styles.yourSmsNumber}>
                      Your SMS number is (44) 123 1234 741
                    </div>
                  </div>
                  <div className={styles.authenticationAppParent}>
                    <div className={styles.authenticationApp}>
                      Authentication app
                    </div>
                    <div
                      className={styles.noAppConfigure}
                    >{`No app configure currently `}</div>
                  </div>
                </div>
                <div className={styles.errorHandler}>
                  <div className={styles.smallButtonOutlineParent}>
                    <button className={styles.smallButtonOutline}>
                      <div className={styles.button2}>Add</div>
                    </button>
                    <button className={styles.smallButtonOutline1}>
                      <div className={styles.button3}>Edit</div>
                    </button>
                    <button className={styles.smallButtonOutline2}>
                      <div className={styles.button4}>Set</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.deleteAccountWrapper}>
            <div className={styles.deleteAccount1}>
              <div className={styles.deleteYourAccount}>
                Delete your account
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.whenYouDeleteYourAccountParent}>
                    <div className={styles.whenYouDeleteContainer}>
                      <p
                        className={styles.whenYouDelete}
                      >{`When you delete your account, you lose access to Front account services, and we permanently delete `}</p>
                      <p className={styles.yourPersonalData}>
                        your personal data. You can cancel the deletion for 14
                        days.
                      </p>
                    </div>
                    <div className={styles.iconcheckboxUncheckedParent}>
                      <input
                        className={styles.iconcheckboxUnchecked}
                        type="checkbox"
                      />
                      <div className={styles.confirmThatIWantToDeleteWrapper}>
                        <div className={styles.confirmThatI}>
                          Confirm that i want to delete my account
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.largeButtonOutlineParent}>
                  <button className={styles.largeButtonOutline}>
                    <div className={styles.button5}>Learn more</div>
                  </button>
                  <button className={styles.buttonLarge2}>
                    <div className={styles.button6}>Delete</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccountPrivacy;

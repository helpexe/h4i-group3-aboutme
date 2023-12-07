import React from 'react'
import styles from "./Helen.module.css";

function Helen() {
    return (
        <div className={styles.my_app}>
          <div className={styles.div}>
            <div className={styles.moosic}>
              <div className={styles.xg}>
                <div className={styles.edge_cards}>
                  <div className={styles.xg_img} />
                  <div className={styles.text_wrapper}>XG</div>
                </div>
              </div>
              <div className={styles.mitski}>
                <div className={styles.edge_cards}>
                  <div className={styles.mitski_img} />
                  <div className={styles.text_wrapper_2}>Mitski</div>
                </div>
              </div>
              <div className={styles.ive}>
                <div className={styles.center_cards}>
                  <div className={styles.ive_img} />
                  <div className={styles.text_wrapper}>IVE</div>
                </div>
              </div>
              <div className={styles.wte}>
                <div className={styles.center_cards}>
                  <div className={styles.wte_img} />
                  <div className={styles.text_wrapper_3}>wave to earth</div>
                </div>
              </div>
              <div className={styles.niki}>
                <div className={styles.edge_cards}>
                  <div className={styles.niki_img} />
                  <div className={styles.text_wrapper_4}>Niki</div>
                </div>
              </div>
              <div className={styles.ve}>
                <div className={styles.edge_cards}>
                  <div className={styles.ve_img} />
                  <div className={styles.text_wrapper_5}>Violet Evergarden</div>
                </div>
              </div>
              <div className={styles.moosic_title}>
                <div className={styles.div_wrapper}>
                  <div className={styles.text_wrapper_6}>Currently Listening...</div>
                </div>
              </div>
            </div>
            <div className={styles.cat_break}>
              <div className={styles.overlap_2}>
                <div className={styles.cat_title}>CAT BREAK!!!</div>
              </div>
            </div>
            <div className={styles.likes_dislikes}>
              <div className={styles.like_title}>Helen Likes...</div>
              <div className={styles.flexcontainer}>
                <p className={styles.text_likes}>
                  <span className={styles.span}>
                    music (too much time was spent making playlists..)
                    <br />
                  </span>
                </p>
                <p className={styles.text_likes}>
                  <span className={styles.span}>
                    drawing
                    <br />
                  </span>
                </p>
                <p className={styles.text_likes}>
                  <span className={styles.span}>
                    manga, manhwa, manhua, all of the above
                    <br />
                  </span>
                </p>
                <p className={styles.text_likes}>
                  <span className={styles.span}>
                    anime (fav genre is romance &lt;3)
                    <br />
                  </span>
                </p>
                <p className={styles.text_likes}>
                  <span className={styles.span}>sleep (yet its non_existent)</span>
                </p>
              </div>
              <div className={styles.dislike_title}>Helen Dislikes...</div>
              <div className={styles.flexcontainer_2}>
                <p className={styles.text_dislikes}>
                  <span className={styles.span}>
                    country music (the only exception!)
                    <br />
                  </span>
                </p>
                <p className={styles.text_dislikes}>
                  <span className={styles.span}>
                    gloomy days (I NEED VITAMIN D)
                    <br />
                  </span>
                </p>
                <p className={styles.text_dislikes}>
                  <span className={styles.span}>
                    Needles..
                    <br />
                  </span>
                </p>
                <p className={styles.text_dislikes}>
                  <span className={styles.span}>being cold</span>
                </p>
              </div>
            </div>
            <div className={styles.major_pos}>
              <div className={styles.overlap_3}>
                <div className={styles.text_wrapper_10}>major: math</div>
                <div className={styles.text_wrapper_11}>position: designer</div>
                <div className={styles.astrick} />
              </div>
            </div>
            <div className={styles.title_page} />
          </div>
        </div>
      );
}

export default Helen
export interface Announcement {
  /**
   * The ID of this announcement.
   *
   * Usually, it is calculated by sha256(name+url)
   */
  id: string;
  /**
   * The title of this announcement.
   */
  title: string;
  /**
   * The url of this announcement.
   */
  url: string;
  // /**
  //  * The relative link to the serialized content of this announcement.
  //  */
  // content: string;
}

/**
 * The fetched announcement list.
 *
 * Inside the list, it is the ID of the announcement. Useful
 * on preventing re-fetching the fetched announcement.
 */
export type FetchedAnnouncementList = [];

export interface AnnouncementContent<T = {}> {
  /**
   * The title of this announcement.
   */
  title: string;
  /**
   * The announcement body.
   */
  content: string;
  /**
   * The attachments of this announcement.
   */
  attachments: {
    /**
     * The name of this attachment.
     */
    name: string;
    /**
     * The url of this attachment.
     */
    url: string;
  },
  /**
   * The extra information of this announcement.
   */
  extra: T,
};

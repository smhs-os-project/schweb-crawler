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
  name: string;
  /**
   * The url of this announcement.
   */
  url: string;
  /**
   * The relative link to the serialized content of this announcement.
   */
  content: string;
}

/**
 * The fetched announcement list.
 *
 * Inside the list, it is the ID of the announcement. It
 * is used on preventing
 */
export type FetchedAnnouncementList = [];

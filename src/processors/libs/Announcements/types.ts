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
  /**
   * The relative link to the serialized content of this announcement.
   */
  content: string;
}

export interface AnnouncementAttachments<T = {}> {
  /**
   * The name of this attachment.
   */
  name: string;
  /**
   * The url of this attachment.
   */
  url: string;
  /**
   * The extra information of this attachment.
   */
  extra?: T;
}

export interface AnnouncementContent<T = {}> {
  /**
   * The title of this announcement.
   */
  title: string;
  /**
   * The announcement body in plain text.
   */
  content: string;
  /**
   * The announcement body in HTML.
   */
  contentHTML: string;
  /**
   * The attachments of this announcement.
   */
  attachments: AnnouncementAttachments[];
  /**
   * The extra information of this announcement.
   */
  extra?: T,
};

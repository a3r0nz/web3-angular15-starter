/**
 * Service Model
 */
 export interface service {
  icon: string;
  bg_color?: string;
  title?: string;
  content?: string;
}

/**
 * People Model
 */
 export interface people {
  image: string;
  name?: string;
  position?: string;
}

/**
 * Blog List
 */
 export interface blog {
  image?: string;
  sub_title?: string;
  title?: string;
  profile?: string;
  name?: string;
  date?: string;
  comments?: string;
}

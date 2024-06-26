export default interface ClickableItemProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  demo?: string;
  madeby?: string;

  id?: string;
  readTimeInMinutes?: number;
  publishedAt?: string;
  views?: number;
}

export type Project = ClickableItemProps;

export interface PortfolioGist {
  projectDetails: Project[];
}

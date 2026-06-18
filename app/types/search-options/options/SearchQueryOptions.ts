export interface SearchQueryOptions {
  query: string;
  exactPhraseQuery: string;
  excludeQuery: string;
  site: string;
  fileType: string | undefined;
  language: string | undefined;
  region: string | undefined;
  afterDate: string;
  beforeDate: string;
}

export type ActiveScreen = 
  | 'home' 
  | 'process' 
  | 'library' 
  | 'repository' 
  | 'ai-assistant' 
  | 'sources' 
  | 'about';

export interface SearchResultItem {
  id: string;
  type: 'process' | 'material' | 'tool' | 'record';
  typeLabel: string;
  title: string;
  description: string;
  targetScreen: ActiveScreen;
  badgeColor: string;
  sourceId?: string;
}


export interface Skill {
  id: number;
  name: string;
  description: string;
  icon?: string;
  color?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date?: string;
  icon?: string;
}

export interface HistoryEvent {
  id: number;
  title: string;
  description: string;
  date?: string;
  importance: 'low' | 'medium' | 'high';
}

export interface Strength {
  id: number;
  name: string;
  value: number;
  description: string;
  icon?: string;
}

export interface Practice {
  id: number;
  name: string;
  description: string;
  benefit: string;
}

interface Activity {
    id?: number;
    content?: string;
    attempts?: Attempts;
    student?: string;
    time?: string;
    skill?: string;
    type?: string;
}

interface Attempts {
    weeks?: string[];
    values?: number[];
    number?: number;
}

interface ActivityClass {
    id?: number;
    students?: string[];
    name?: string;
}

  
  
  
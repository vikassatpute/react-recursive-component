
export type Comment = {
  id: number;
  name: string;
  image: string;
  body: string;
  comment?: Comment[]
}

export const comment: Comment[] = [
  {
    id: 1,
    name: "John Doe",
    image: "https://placehold.co/100x100",
    body: "This is the first comment.",
    comment: [
      {
        id: 2,
        name: "Jane Smith",
        image: "https://placehold.co/100x100",
        body: "This is a reply to the first comment.",
        comment: [
          {
            id: 3,
            name: "Sam Wilson",
            image: "https://placehold.co/100x100",
            body: "This is a reply to Jane's comment.",
            comment: []
          }
        ]
      },
      {
        id: 4,
        name: "Alice Johnson",
        image: "https://placehold.co/100x100",
        body: "Another reply to the first comment.",
        comment: []
      }
    ]
  },
  {
    id: 5,
    name: "Michael Brown",
    image: "https://placehold.co/100x100",
    body: "This is another top-level comment.",
    comment: [
      {
        id: 6,
        name: "Emily Davis",
        image: "https://placehold.co/100x100",
        body: "This is a reply to Michael's comment.",
        comment: [
          {
            id: 7,
            name: "David Harris",
            image: "https://placehold.co/100x100",
            body: "This is a reply to Emily's comment.",
            comment: []
          }
        ]
      }
    ]
  }
];



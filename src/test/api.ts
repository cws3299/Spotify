// jsonplaceholder API getPosts function

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`
    );
    if (!response.ok) {
      throw new Error("데이터를 불러오는 데 실패하였습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPost = async (id: number): Promise<Post> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw new Error("데잍터를 불러오는데 실패했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {} as Post;
  }
};

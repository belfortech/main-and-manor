const API_BASE_URL ="http://127.0.0.1:8000/api";

export async function fetchFeaturedProperties(){
    const response = await fetch(`${API_BASE_URL}/properties/`);
    if (!response.ok){
        throw new Error("Failed to fetch properties");
    }
    return response.json();
}

export async function fetchOffPlanProperties() {
    const res = await fetch(`${API_BASE_URL}/offplan-properties/`);
    if (!res.ok) throw new Error("Failed to fetch off-plan properties");
    return res.json();
  }

export async function fetchPropertyById(id: number){
    const response = await fetch(`${API_BASE_URL}/properties/${id}/`);
    if (!response.ok){
        throw new Error("Property not found");
    }
    return response.json();
}

export async function fetchBlogCategories(){
    const res = await fetch("http://127.0.0.1:8000/api/blogs/categories/");
    return res.json()
}

export async function fetchBlogs(category?: string){
    const url = category
    ? `http://127.0.0.1:8000/api/blogs/?category=${category}`
    : `http://127.0.0.1:8000/api/blogs/`;

    const res = await fetch(url);
    return res.json();
}

export async function fetchCommunities(){
    const res = await fetch("http://127.0.0.1:8000/api/communities/");
    return res.json();
}

export async function fetchSuggestedProperties(id: number) {
    const res = await fetch(
      `http://127.0.0.1:8000/api/properties/?exclude=${id}&limit=6`
    );
    if (!res.ok) throw new Error("Failed to fetch suggested properties");
    return res.json();
  }

  
  export async function fetchAllProperties() {
    const res = await fetch("http://127.0.0.1:8000/api/properties/");
    if (!res.ok) throw new Error("Failed to fetch properties");
    return res.json();
  }
  
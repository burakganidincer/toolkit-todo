import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      title: "Footer'ı düzenle",
      author: "Ahmet",
      assigned_to: "Mehmet",
      end_date: "1997-03-03",
      id: "24b57fe8-a5e2-44ff-804f-908b8b114531",
    },
    {
      title: "Navbar Animasyonu",
      author: "Gani",
      assigned_to: "Burak",
      end_date: "2004-05-27",
      id: "8fe0f2ee-6362-47e0-a9a0-c44630731533",
    },
    {
      title: "Header responsive",
      author: "Soner",
      assigned_to: "Agam",
      end_date: "2024-05-05",
      id: "726331bc-16e2-4a92-be51-8dedec565ad6",
    },
  ],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //a)todo'ya id ekle
      action.payload.id = v4();

      //b) veriyi task'lerin arasına ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // ID'si payload ile gelen elemanı diziden kaldır.
      //splice ile silenecek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload);

      //diziden elemanı kaldır
      state.tasks.splice(index, 1);
    },

    editTask: (state, action) => {
      //güncel verilerine sahip olduğumuz elemanın dizideki halini güncelleme
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);

      //elemanı güncelle
      state.tasks.splice(index, 1, action.payload);
    },
  },
});
//reducer'ı store a tanıtmak için export
export default crudSlice.reducer;

//aksiyonları kullanabilmek için export
export const { addTask, deleteTask, editTask } = crudSlice.actions;

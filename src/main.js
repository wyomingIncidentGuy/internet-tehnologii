import './style.scss';

const { createApp, ref, computed } = Vue;

const app = createApp({
  setup(){
    const chapters = ref([
      {
        title: 'Каша из топора',
        description: 'Каша из топора - аудиокнига, которую вы можете слушать онлайн. Аудиосказка Каша из топора представлена в формате mp3.',
        audio: '/audio/deti-online.com_-_kasha-iz-topora.mp3',
        image:'/images/kasha-iz-topora.webp',
      },
      {
        title: 'Колобок',
        description: '«Колобок» — русская народная аудиосказка для самых маленьких.',
        audio: '/audio/deti-online.com_-_kolobok.mp3',
        image:'/images/kolobok.webp',
      },
      {
        title: 'Курочка Ряба',
        description: 'Курочка Ряба - аудиокнига, которую вы можете слушать онлайн. Аудиокнига Курочка Ряба представлена в формате mp3.',
        audio: '/audio/deti-online.com_-_kurochka-ryaba.mp3',
        image:'/images/kurochka-ryaba.webp',
      },
      {
        title: 'Репка',
        description: 'Репка - аудиокнига, которую вы можете слушать онлайн. Аудиосказка Репка представлена в формате mp3.',
        audio: '/audio/deti-online.com_-_repka.mp3',
        image:'/images/repka.webp',
      },
      {
        title: 'Теремок',
        description: 'Теремок — это одна из самых известных русских народных аудиосказок, которая передает народные традиции и ценности. Главные герои сказки — лесные обитатели мирно проживают внутри Теремка, уважая друг друга, показывая детям хороший пример дружбы и взаимопомощи. ',
        audio: '/audio/deti-online.com_-_teremok.mp3',
        image:'/images/teremok.webp',
      },
    ]);

    const currentChapterIndex = ref(null);

    const currentChapter = computed(() => {
      return chapters.value[currentChapterIndex.value] ?? null;
    });

    const nextChapter = () => {
      if (currentChapterIndex.value < chapters.value.length - 1) {
        currentChapterIndex.value++;
      }
    }

    const prevChapter = () => {
      if (currentChapterIndex.value > 0) {
        currentChapterIndex.value--;
      }
    }
    
    return {
      chapters,
      currentChapterIndex,
      currentChapter,
      nextChapter,
      prevChapter,
    }

  }
})
app.mount("#app");
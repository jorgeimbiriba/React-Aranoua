import {News, Category, ApiResponse} from "../types";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

// Dados Mockados tipados
export const MOCK_NEWS: News[] = [
    {
        id: '1',
        title: 'React Native 0.75 Lançado com novas funcionalidades',
        description: 'A nova versão do React Native traz melhorias significativas de performance e nova arquitetura padrão.',
        author: 'Tech News',
        publishedAt: '2025-11-06T10:00:00Z',
        urlToImage: 'https://picsum.photos/400/250?random=1',
        content: 'A equipe do Facebook anunciou hoje a versão estável, focando em melhorias na bridge e no hermes engine.',
        category: 'tecnologia'
    },
    {
        id: '2',
        title: 'TypeScript 5.3: Type Safety ainda mais poderosa',
        description: 'Nova versão do typescript traz avanços grandes na inferência de tipos e performance de compilação.',
        author: 'TypeScript Today',
        publishedAt: '2025-11-04T09:15:00Z',
        urlToImage: 'https://picsum.photos/400/250?random=2',
        content: 'O TypeScript 5.3 foi lançado com foco de melhorar o desenvolvimento e reduzir erros em tempo de execução.',
        category: 'tecnologia'
    },
    {
        id: '3',
        title: 'Avanços da Inteligência Artificial em 2025',
        description: 'Novos modelos de linguagem estão transformando a maneira como escrevemos código.',
        author: 'AI Weekly',
        publishedAt: '2025-11-03T14:20:00Z',
        urlToImage: 'https://picsum.photos/400/250?random=3',
        content: 'Empresas de tecnologia correm para integrar assistentes de IA diretamente em suas IDEs.',
        category: 'inteligencia_artificial'
    },
    {
        id: '4',
        title: 'Next.js 15: O que muda no SSR?',
        description: 'A Vercel anuncia mudanças na estratégia de renderização do lado do servidor.',
        author: 'Web Dev Daily',
        publishedAt: '2025-11-02T11:00:00Z',
        urlToImage: 'https://picsum.photos/400/250?random=4',
        content: 'Com o foco em Server Actions, o Next.js simplifica ainda mais a comunicação entre front e back-end.',
        category: 'web'
    },
    {
        id: '5',
        title: 'Segurança Cibernética: Protegendo APIs',
        description: 'Novos protocolos de segurança tornam-se padrão para evitar vazamento de dados.',
        author: 'Security Ops',
        publishedAt: '2025-11-01T08:30:00Z',
        urlToImage: 'https://picsum.photos/400/250?random=5',
        content: 'Especialistas recomendam a adoção imediata de autenticação multifator e tokens de curta duração.',
        category: 'seguranca'
    },
    {
        id: '6',
        title: 'O Futuro do Flutter no Desenvolvimento Mobile',
        description: 'Google reforça compromisso com o framework e anuncia suporte expandido para desktop.',
        author: 'Mobile World',
        publishedAt: '2025-10-30T16:45:00Z',
        urlToImage: 'https://picsum.photos/400/250?random=6',
        content: 'A nova atualização do Flutter promete renderização gráfica 30% mais rápida em dispositivos Android.',
        category: 'mobile'
    },
    {
        id: '7',
        title: 'Python mantém liderança em Data Science',
        description: 'Linguagem continua sendo a preferida para análise de dados e machine learning.',
        author: 'Data Insights',
        publishedAt: '2025-10-29T13:10:00Z',
        urlToImage: 'https://picsum.photos/400/250?random=7',
        content: 'Bibliotecas como Pandas e NumPy recebem atualizações cruciais para lidar com grandes volumes de dados.',
        category: 'dados'
    },
    {
        id: '8',
        title: 'Apple lança novos chips M5',
        description: 'A nova geração de processadores promete revolução em performance energética.',
        author: 'Hardware Zone',
        publishedAt: '2025-10-28T10:00:00Z',
        urlToImage: 'https://picsum.photos/400/250?random=8',
        content: 'Os novos MacBooks equipados com M5 mostram resultados impressionantes em benchmarks de compilação.',
        category: 'hardware'
    },
    {
        id: '9',
        title: 'Docker e Kubernetes: Orquestração Simplificada',
        description: 'Novas ferramentas visam facilitar a vida de quem gerencia containers em escala.',
        author: 'DevOps Life',
        publishedAt: '2025-10-27T09:25:00Z',
        urlToImage: 'https://picsum.photos/400/250?random=9',
        content: 'A complexidade de gerenciar clusters Kubernetes está diminuindo com novas interfaces visuais.',
        category: 'devops'
    },
    {
        id: '10',
        title: 'WebAssembly ganha tração nos navegadores',
        description: 'Aplicações de alta performance agora rodam nativamente na web sem plugins.',
        author: 'Browser News',
        publishedAt: '2025-10-26T15:50:00Z',
        urlToImage: 'https://picsum.photos/400/250?random=10',
        content: 'Jogos e editores de vídeo complexos estão migrando para a web graças ao poder do WASM.',
        category: 'web'
    }
];

//funçao ára simular o delay de rede
const delay = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms));

//buscar lista de notícias
export const fetchNews = async(category: string =  ''): Promise<ApiResponse<News[]>> =>{
    try {
        //Simula delay de rede (500 ms a 1.5s)
        await delay(Math.random()*1000+500);

        //filtra por categoria fornecida
        let filteredNews = MOCK_NEWS;
        if(category && category != 'todas'){
            filteredNews = MOCK_NEWS.filter(news => news.category === category )
        }

        //simula possível erro
        if(Math.random() < 0.05){
            throw new Error('Error ao notícias');
        }

        return{
            sucess: true,
            data: filteredNews
        }

    }catch(error){
        return{
            sucess:false,
            error:error instanceof Error ? error.message : 'Erro Desconhecido'
        }
    }
}

//buscar detalhes de uma notícia espcífica
export const fetchNewsById = async (id: string): Promise<ApiResponse<News>> => {
    try {
        await delay(300)

        const news = MOCK_NEWS.find(item => item.id === id);
        if (!news) {
            throw new Error('Notícia não encontrada');
        }

        return {
            sucess: true,
            data: news
        }
    } catch (error) {
        return {
            sucess: false,
            error: error instanceof Error ? error.message : 'Erro Desconhecido'
        }
    }
}

//lista de categorias disponíveis
export const CATEGORIES: Category[] = [
    {
        id: 'todas',
        name: 'Todas',
        emoji: '📰'
    },
    {
        id: 'tecnologia',
        name: 'Tecnologia',
        emoji: '💻'
    },
    {
        id: 'inteligencia_artificial',
        name: 'IA',
        emoji: '🤖'
    },
    {
        id: 'mobile',
        name: 'Mobile',
        emoji: '📱'
    },
    {
        id: 'web',
        name: 'Web Dev',
        emoji: '🌐'
    },
    {
        id: 'seguranca',
        name: 'Segurança',
        emoji: '🔒'
    },
    {
        id: 'dados',
        name: 'Dados', // CORRIGIDO: Maiúscula para ficar bonito na UI
        emoji: '📊'
    },
    {
        id: 'hardware',
        name: 'Hardware', // CORRIGIDO: Maiúscula para ficar bonito na UI
        emoji: '🔌'
    },
    {
        id: 'devops',
        name: 'DevOps',
        emoji: '⚙️'
    }
];
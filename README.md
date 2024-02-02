
Bu uygulama, Node.js ve MongoDB kullanılarak oluşturulmuş basit bir Otel API içerir. Express.js çerçevesi kullanılarak sunucu tarafı geliştirme ve MongoDB entegrasyonu için Mongoose kullanılmıştır.

Kullanılan Teknolojiler
Node.js: Sunucu tarafı geliştirme için JavaScript çalışma ortamı.
Express.js: Node.js ile API oluşturmak için web uygulama çerçevesi.
MongoDB: Otel verilerini depolamak için NoSQL veritabanı.
Mongoose: Node.js için MongoDB nesne modelleme kütüphanesi.
Başlangıç
Bu projeyi yerel olarak çalıştırmak için şu adımları izleyin:
Bağımlılıkları yükleyin: npm install
config.js dosyasında MongoDB bağlantısını yapılandırın.
Sunucuyu başlatın: npm start
API'ye http://localhost:3000 (veya belirtilen port) adresinden erişin.
API Endpoint'leri
GET /oteller: Tüm otellerin listesini alın.
GET /oteller/:id: Belirli bir otelin ID'sine göre detaylarını alın.
POST /oteller: Yeni bir otel kaydı oluşturun.
PUT /oteller/:id: Belirli bir otelin ID'sine göre detaylarını güncelleyin.
DELETE /oteller/:id: Belirli bir oteli ID'sine göre kaldırın.

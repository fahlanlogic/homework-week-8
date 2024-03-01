-- tampilkan seluruh kolom pada table category dan table film
SELECT category.*, film.*  
-- dari table film yang akan di join
FROM film 
-- lalu join ke dalam table film_category (sbg junction table) dengan referensi film.film_id sebagai FK dari film_category.film_id 
JOIN film_category ON film.film_id = film_category.film_id 
-- join juga table category dengan referensi film_category.category_id sebagai FK dari category.category_id
JOIN category ON film_category.category_id = category.category_id
-- dan cari pada table category berdasarkan namanya
WHERE category.name = $1;

-- table film_category merupakan junction table (table perantara) yang bersifat many-to-many, yang mana disitu terdapat
-- 2 kolom FK dari table film dan table category karena saling berelasi, setelah digabungkan/join barulah kita bisa mengambil data film
-- berdasarkan nama category (bisa jg berupa id category), 
-- jika junction table ini tidak ada maka tidak akan bisa menampilkan data seluruh film yang berdasarkan nama category.
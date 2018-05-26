
<?php get_header(  );?>

<div>
<?php if(have_posts()): while(have_posts()): the_post(); ?> <!-- ループ開始 -->

<?php echo get_the_date(); ?> <!-- 投稿日時を表示 -->
<?php the_category(', '); ?> <!-- カテゴリーを表示 -->

<div class = title >
<?php the_title(); ?> <!-- 記事タイトルを表示 -->
</div>

<?php the_post_thumbnail();?>
<?php the_content(); ?> <!-- 記事本文を表示 -->

<?php endwhile; endif; ?> <!-- ループ終了 -->
</div>


<?php get_footer(  ); ?>

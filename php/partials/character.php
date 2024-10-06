<div class="character-container">
    <h2><?= $name ?></h2>
    <div class="image-container">
        <img id='<?= $code ?>' src="<?= $picPath ?>" />
    </div>
    <div class="buttons-container">
        <button id='yes-<?= $code ?>' onclick="yes('<?= $code ?>')">Yes</button>
        <button id='maybe-<?= $code ?>' onclick="maybe('<?= $code ?>')">Maybe</button>
        <button id='no-<?= $code ?>' onclick="no('<?= $code ?>')">No</button>
    </div>
</div>